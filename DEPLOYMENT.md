# SAKJI AutoShop - Deployment Guide

This guide covers deploying the SAKJI AutoShop application with:
- **Frontend**: Vercel
- **Backend**: Railway/Render (Node.js/Express)
- **Database**: Supabase PostgreSQL

---

## Prerequisites

- Node.js 20+ installed locally
- Vercel account ([vercel.com](https://vercel.com))
- Railway or Render account ([railway.app](https://railway.app) or [render.com](https://render.com))
- Supabase account ([supabase.com](https://supabase.com))
- Google AI Studio account for Gemini API key

---

## Step 1: Set Up Supabase Database

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the database to be provisioned
3. Navigate to **Settings > Database**
4. Copy the **Connection String** (URI format)
5. The connection string format will be:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
   ```

---

## Step 2: Deploy Backend to Railway/Render

### Option A: Railway Deployment

1. Go to [railway.app](https://railway.app) and create a new project
2. Click **New Project > Deploy from GitHub repo**
3. Connect your GitHub repository
4. Select the `backend` folder as the root directory
5. Configure environment variables in Railway:
   ```
   PORT=3001
   NODE_ENV=production
   DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?sslmode=require
   GEMINI_API_KEY=your_gemini_api_key_here
   FRONTEND_URL=https://your-app.vercel.app
   ```
6. Click **Deploy**
7. Wait for deployment to complete
8. Copy the generated Railway URL (e.g., `https://your-app.railway.app`)

### Option B: Render Deployment

1. Go to [render.com](https://render.com) and create a new account
2. Click **New > Web Service**
3. Connect your GitHub repository
4. Set root directory to `backend`
5. Configure build and start commands:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
6. Add environment variables:
   ```
   PORT=3001
   NODE_ENV=production
   DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?sslmode=require
   GEMINI_API_KEY=your_gemini_api_key_here
   FRONTEND_URL=https://your-app.vercel.app
   ```
7. Click **Create Web Service**
8. Wait for deployment to complete
9. Copy the generated Render URL

---

## Step 3: Run Database Migrations

After deploying the backend, you need to set up the database schema:

1. SSH into your Railway/Render service or use their web console
2. Run the migration command:
   ```bash
   npm run db:push
   ```
3. Optionally seed the database:
   ```bash
   npm run db:seed
   ```

---

## Step 4: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and create a new account
2. Click **Add New Project**
3. Import your GitHub repository
4. Set the root directory to `frontend`
5. Configure environment variables:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```
   (Replace with your Railway/Render URL from Step 2)
6. Click **Deploy**
7. Wait for deployment to complete
8. Copy the generated Vercel URL

---

## Step 5: Update Backend CORS

After deploying the frontend to Vercel, update the backend's `FRONTEND_URL` environment variable:

1. Go to your Railway/Render dashboard
2. Update `FRONTEND_URL` to your Vercel URL:
   ```
   FRONTEND_URL=https://your-app.vercel.app
   ```
3. Redeploy the backend service

---

## Step 6: Verify Deployment

1. Visit your Vercel URL
2. Test the chat widget with a diagnostic question
3. Check the browser console for any errors
4. Verify API calls are successful in the Network tab

---

## Environment Variables Reference

### Backend (Railway/Render)
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3001` |
| `NODE_ENV` | Environment | `production` |
| `DATABASE_URL` | Supabase connection string | `postgresql://postgres:pass@db.xxx.supabase.co:5432/postgres` |
| `GEMINI_API_KEY` | Google Gemini API key | `AIza...` |
| `FRONTEND_URL` | Vercel frontend URL | `https://your-app.vercel.app` |

### Frontend (Vercel)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://your-backend.railway.app` |

---

## Troubleshooting

### CORS Errors
- Ensure `FRONTEND_URL` in backend matches your Vercel URL exactly
- Check that the backend is running and accessible

### Database Connection Errors
- Verify the Supabase connection string is correct
- Ensure SSL mode is enabled (`sslmode=require`)
- Check Supabase project status

### Chat Widget Not Working
- Verify `VITE_API_URL` is set correctly in Vercel
- Check browser console for API errors
- Ensure backend rate limits aren't blocking requests

---

## Security Notes

- Never commit `.env` files to version control
- Rotate API keys periodically
- Use environment-specific API keys when possible
- Enable SSL/TLS for all connections
- Monitor Supabase and Railway/Render logs for suspicious activity

---

## Cost Estimates

- **Vercel**: Free tier available for personal projects
- **Railway**: $5/month starting price (free trial available)
- **Render**: Free tier available, then $7/month starting
- **Supabase**: Free tier available (500MB database)

---

## Support

For issues with:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Railway**: [docs.railway.app](https://docs.railway.app)
- **Render**: [render.com/docs](https://render.com/docs)
- **Supabase**: [supabase.com/docs](https://supabase.com/docs)
