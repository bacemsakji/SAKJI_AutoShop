import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import styles from './Appointments.module.css';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import { getServices, Service } from '../api/services';
import { createAppointment, AppointmentResponse, CreateAppointmentPayload } from '../api/appointments';

const OPEL_MODELS = ['Corsa', 'Astra', 'Mokka', 'Crossland', 'Grandland', 'Insignia', 'Adam', 'Karl', 'Zafira'];
const FORD_MODELS = ['Fiesta', 'Focus', 'Puma', 'Kuga', 'Ranger', 'Mondeo', 'Mustang', 'EcoSport', 'Explorer'];
const YEARS = Array.from({ length: new Date().getFullYear() - 1989 }, (_, i) => new Date().getFullYear() - i);
const TIME_SLOTS = ['08:00', '09:30', '11:00', '14:00', '15:30', '17:00'];

const Appointments: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledServiceId = searchParams.get('serviceId') ? Number(searchParams.get('serviceId')) : 0;

  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<AppointmentResponse | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const { register, handleSubmit, watch, control, setValue, formState: { errors } } = useForm<CreateAppointmentPayload>({
    defaultValues: {
      carBrand: '',
      carModel: '',
      carYear: new Date().getFullYear(),
      serviceId: prefilledServiceId,
      preferredDate: '',
      preferredTime: '',
    }
  });

  const selectedBrand = watch('carBrand');

  useEffect(() => {
    setValue('carModel', '');
  }, [selectedBrand, setValue]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        console.error('Failed to load services', err);
      }
    };
    fetchServices();
  }, []);

  const onSubmit = async (data: CreateAppointmentPayload) => {
    try {
      setIsLoading(true);
      setApiError(null);
      // Validate date (not Sunday, not past)
      const selectedDate = new Date(data.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        setApiError('Date cannot be in the past');
        setIsLoading(false);
        return;
      }
      if (selectedDate.getDay() === 0) {
        setApiError('We are closed on Sundays. Please select another date.');
        setIsLoading(false);
        return;
      }

      data.serviceId = Number(data.serviceId);
      data.carYear = Number(data.carYear);

      const response = await createAppointment(data);
      setSuccessData(response);
    } catch (err: any) {
      if (err.response?.data?.error?.message) {
        setApiError(err.response.data.error.message);
      } else {
        setApiError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const currentModels = selectedBrand === 'Opel' ? OPEL_MODELS : selectedBrand === 'Ford' ? FORD_MODELS : [];

  if (successData) {
    return (
      <section>
        <div className={`container ${styles.container}`}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✓</div>
            <h2>Appointment Confirmed</h2>
            <p>Your booking has been successfully received.</p>
            
            <div className={styles.refCode}>
              {successData.reference}
            </div>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px', fontSize: 'var(--text-sm)' }}>
              Please save this reference code. You can use it to check your appointment status.
            </p>

            <div className={styles.summary}>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Name</span>
                <span className={styles.summaryValue}>{successData.fullName}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Service</span>
                <span className={styles.summaryValue}>{successData.serviceName}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Date</span>
                <span className={styles.summaryValue}>{successData.preferredDate}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Time</span>
                <span className={styles.summaryValue}>{successData.preferredTime}</span>
              </div>
            </div>

            <Button onClick={() => setSuccessData(null)}>Book Another Service</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h1>Book an Appointment</h1>
          <p>Schedule your visit with our expert technicians. We'll get you back on the road safely.</p>
        </div>

        <div className={styles.formCard}>
          {apiError && (
            <div style={{ backgroundColor: 'rgba(192, 57, 43, 0.1)', color: 'var(--color-error)', padding: '16px', borderRadius: '4px', marginBottom: '24px', border: '1px solid var(--color-error)' }}>
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              label="Full Name *" 
              placeholder="e.g. Yassine Ben Amor"
              {...register('fullName', { required: 'Full name is required' })}
              error={errors.fullName?.message}
            />

            <Input 
              label="Phone Number *" 
              placeholder="+216 XX XXX XXX"
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: {
                  value: /^\+216\s?\d{2}\s?\d{3}\s?\d{3}$/,
                  message: 'Must be in format +216 XX XXX XXX'
                }
              })}
              error={errors.phone?.message}
            />

            <div className={styles.row}>
              <Select 
                label="Car Brand *"
                placeholder="Select Brand"
                options={[
                  { value: 'Opel', label: 'Opel' },
                  { value: 'Ford', label: 'Ford' }
                ]}
                {...register('carBrand', { required: 'Please select a brand' })}
                error={errors.carBrand?.message}
              />

              <Select 
                label="Car Model *"
                placeholder="Select Model"
                options={currentModels.map(m => ({ value: m, label: m }))}
                disabled={!selectedBrand}
                {...register('carModel', { required: 'Please select a model' })}
                error={errors.carModel?.message}
              />
            </div>

            <Select 
              label="Car Year *"
              placeholder="Select Year"
              options={YEARS.map(y => ({ value: y, label: y.toString() }))}
              {...register('carYear', { required: 'Year is required' })}
              error={errors.carYear?.message}
            />

            <Select 
              label="Service Required *"
              placeholder="Select a service"
              options={services.map(s => ({ value: s.id, label: s.name }))}
              {...register('serviceId', { required: 'Please select a service' })}
              error={errors.serviceId?.message}
            />

            <div className={styles.row}>
              <Input 
                type="date"
                label="Preferred Date *"
                min={new Date().toISOString().split('T')[0]} // Cannot be in the past
                {...register('preferredDate', { required: 'Date is required' })}
                error={errors.preferredDate?.message}
              />

              <Select 
                label="Preferred Time *"
                placeholder="Select time"
                options={TIME_SLOTS.map(t => ({ value: t, label: t }))}
                {...register('preferredTime', { required: 'Time is required' })}
                error={errors.preferredTime?.message}
              />
            </div>

            <Textarea 
              label="Additional Notes (Optional)"
              placeholder="Describe any specific issues or sounds you've noticed..."
              {...register('notes')}
            />

            <Button 
              type="submit" 
              variant="primary" 
              fullWidth 
              className={styles.submitBtn}
              disabled={isLoading}
            >
              {isLoading ? 'Booking...' : 'Confirm Appointment'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointments;
