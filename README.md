# SAKJI AutoShop

A modern full-stack e-commerce platform for automotive parts with AI-powered customer assistance. Built with React, TypeScript, Node.js, and PostgreSQL.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)
![React](https://img.shields.io/badge/React-18.3-cyan.svg)
![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)

## 🚀 Features

- **Product Catalog**: Browse and search automotive parts with filtering by category and manufacturer
- **Services Management**: View and book automotive services
- **Appointments System**: Schedule service appointments online
- **AI-Powered Chat Assistant**: Intelligent customer support using OpenRouter API for real-time diagnostic assistance
- **Responsive Design**: Mobile-first UI built with modern CSS modules
- **Secure API**: Rate limiting, CORS protection, and Helmet security headers
- **Type Safety**: Full-stack TypeScript implementation
- **Database Integration**: PostgreSQL with Drizzle ORM for efficient data management
- **Docker Support**: Containerized deployment with Docker Compose

## 🛠 Tech Stack

### Frontend
- **React 18.3** - UI library with hooks and functional components
- **TypeScript 5.5** - Type-safe JavaScript
- **Vite 5.4** - Fast build tool and dev server
- **React Router 6.28** - Client-side routing
- **Axios 1.7** - HTTP client for API requests
- **CSS Modules** - Scoped styling for components

### Backend
- **Node.js 20+** - JavaScript runtime
- **Express 5.2** - Web framework
- **TypeScript 5.8** - Type-safe backend development
- **PostgreSQL** - Relational database
- **Drizzle ORM 0.45** - Type-safe SQL query builder
- **Zod 4.4** - Schema validation
- **OpenRouter API** - AI integration for chat functionality
- **Helmet 8.2** - Security headers
- **express-rate-limit 8.5** - API rate limiting
- **CORS 2.8** - Cross-origin resource sharing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Vercel** - Frontend deployment (recommended)
- **Railway/Render** - Backend deployment options

## 📁 Project Structure

```
SAKJI_AutoShop/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── chat/        # AI chat widget
│   │   │   ├── layout/      # Navbar, Footer, Layout
│   │   │   └── ui/          # Button, Input, Select, etc.
│   │   ├── pages/           # Page components (Home, Services, Appointments)
│   │   ├── api/             # API client functions
│   │   ├── hooks/           # Custom React hooks
│   │   └── assets/          # Images and static assets
│   ├── public/              # Public assets
│   └── package.json
├── backend/                  # Node.js/Express API
│   ├── src/
│   │   ├── routes/          # API route handlers
│   │   ├── middleware/      # Express middleware
│   │   ├── lib/             # Utility libraries
│   │   ├── db/              # Database schema and seed
│   │   └── utils/           # Helper functions
│   └── package.json
├── Dockerfile               # Backend Docker configuration
├── docker-compose.yml       # Multi-container setup
└── README.md
```

## 🎯 Key Highlights for Recruiters

### Engineering Excellence
- **Full-Stack Development**: Demonstrated proficiency in both frontend (React) and backend (Node.js/Express) development
- **Type Safety**: Comprehensive TypeScript implementation across the entire stack
- **API Design**: RESTful API architecture with proper error handling and validation
- **Security Best Practices**: Implementation of rate limiting, CORS, Helmet, and environment variable management
- **Database Management**: Experience with PostgreSQL and modern ORM (Drizzle)
- **AI Integration**: Practical experience integrating AI APIs (OpenRouter) for real-time applications

### Code Quality
- **Clean Architecture**: Separation of concerns with organized folder structure
- **Reusable Components**: Modular component design with props and hooks
- **State Management**: Efficient state management using React Context and custom hooks
- **Error Handling**: Comprehensive error handling middleware and user-friendly error messages
- **Validation**: Schema validation using Zod for API endpoints

### DevOps & Deployment
- **Containerization**: Docker and Docker Compose for consistent deployments
- **Cloud Deployment**: Experience with Vercel (frontend) and Railway/Render (backend)
- **Environment Management**: Proper handling of environment variables and configuration
- **Build Optimization**: Vite for fast development builds and optimized production bundles

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ and npm
- PostgreSQL 14+
- OpenRouter API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/bacemsakji/SAKJI_AutoShop.git
cd SAKJI_AutoShop
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your database URL and API keys
npm run db:push    # Push database schema
npm run db:seed    # Seed database with sample data
npm run dev        # Start backend server (port 3001)
```

3. **Frontend Setup**
```bash
cd frontend
npm install
cp .env.example .env
# Update .env with VITE_API_URL=http://localhost:3001
npm run dev        # Start frontend dev server (port 5173)
```

4. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
- API Health Check: http://localhost:3001/api/health

### Docker Deployment

```bash
# Build and start all services
docker-compose up --build

# The application will be available at:
# - Frontend: http://localhost:5173
# - Backend: http://localhost:3001
```

## 📊 API Endpoints

### Chat API
- `POST /api/chat` - Send message to AI assistant
- Rate limited: 100 requests per 15 minutes per IP

### Services API
- `GET /api/services` - Get all available services

### Appointments API
- `POST /api/appointments` - Book an appointment
- `GET /api/appointments` - Get all appointments

### Testimonials API
- `GET /api/testimonials` - Get customer testimonials

### Health Check
- `GET /api/health` - Check API status

## 🔒 Environment Variables

### Backend (.env)
```
PORT=3001
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/sakji_autoshop
OPENROUTER_API_KEY=your_openrouter_api_key
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3001
```

## 🎨 UI Features

- **Home Page**: Hero section, featured services, testimonials
- **Services Page**: List of automotive services with descriptions
- **Appointments Page**: Book service appointments with form validation
- **Chat Widget**: Floating AI assistant for customer support
- **Responsive Layout**: Optimized for desktop, tablet, and mobile

## 🧪 Testing & Development

```bash
# Backend
npm run build          # Compile TypeScript
npm run start          # Start production server
npm run db:generate    # Generate Drizzle migrations
npm run db:migrate     # Run database migrations

# Frontend
npm run build          # Build for production
npm run preview        # Preview production build
```

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Sakji**
- GitHub: [@bacemsakji](https://github.com/bacemsakji)

## 🙏 Acknowledgments

- OpenRouter API for AI-powered chat functionality
- Drizzle ORM for type-safe database operations
- Vite for lightning-fast development experience
