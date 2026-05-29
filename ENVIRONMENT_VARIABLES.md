# Environment Variables Configuration

This document outlines all environment variables required for deploying SAKJI AutoShop to production.

---

## Backend Environment Variables

### Required Variables

| Variable | Description | Example | Source |
|----------|-------------|---------|--------|
| `PORT` | Server port number | `3001` | Railway/Render auto-set |
| `NODE_ENV` | Environment mode | `production` | Railway/Render auto-set |
| `DATABASE_URL` | Supabase PostgreSQL connection string | `postgresql://postgres:pass@db.xxx.supabase.co:5432/postgres?sslmode=require` | Supabase Dashboard |
| `GEMINI_API_KEY` | Google Gemini API key for AI diagnostics | `AIza...` | Google AI Studio |
| `FRONTEND_URL` | Frontend URL for CORS | `https://your-app.vercel.app` | Vercel deployment |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `ANTHROPIC_API_KEY` | Anthropic API key (deprecated, use GEMINI_API_KEY) | - |

---

## Frontend Environment Variables

### Required Variables

| Variable | Description | Example | Source |
|----------|-------------|---------|--------|
| `VITE_API_URL` | Backend API URL | `https://your-backend.railway.app` | Railway/Render deployment |

---

## Getting Environment Variables

### Supabase DATABASE_URL

1. Go to [supabase.com](https://supabase.com)
2. Select your project
3. Navigate to **Settings > Database**
4. Find **Connection String** > **URI**
5. Copy the connection string in this format:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?sslmode=require
   ```

### GEMINI_API_KEY

1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Click **Create API Key**
4. Copy the generated key (starts with `AIza`)

### FRONTEND_URL

1. Deploy your frontend to Vercel first
2. Copy the generated Vercel URL
3. Use this URL in the backend environment variables

### VITE_API_URL

1. Deploy your backend to Railway/Render first
2. Copy the generated backend URL
3. Use this URL in the Vercel environment variables

---

## Setting Environment Variables

### Railway (Backend)

1. Go to your Railway project
2. Click on your backend service
3. Navigate to **Variables** tab
4. Add each variable with its value
5. Redeploy the service after adding variables

### Render (Backend)

1. Go to your Render dashboard
2. Click on your web service
3. Scroll to **Environment** section
4. Add each variable with its value
5. Render will automatically redeploy

### Vercel (Frontend)

1. Go to your Vercel project
2. Navigate to **Settings > Environment Variables**
3. Add each variable with its value
4. Select appropriate environments (Production, Preview, Development)
5. Redeploy the project

---

## Local Development

For local development, copy the example files:

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend (create .env file)
cd frontend
echo "VITE_API_URL=http://localhost:3001" > .env
```

Then update the values in the `.env` files with your local development values.

---

## Security Best Practices

1. **Never commit `.env` files** to version control
2. **Use different API keys** for development and production
3. **Rotate API keys** periodically
4. **Use environment-specific secrets** when possible
5. **Monitor usage** of API keys to detect unauthorized access
6. **Limit API key permissions** to only what's needed

---

## Troubleshooting

### DATABASE_URL Connection Issues

- Ensure the connection string includes `?sslmode=require`
- Verify the password is correct
- Check that the Supabase project is active
- Ensure the database is not paused (Supabase free tier pauses after inactivity)

### GEMINI_API_KEY Issues

- Verify the key starts with `AIza`
- Check that the key is enabled in Google AI Studio
- Monitor usage in the Google AI Studio dashboard

### CORS Errors

- Ensure `FRONTEND_URL` in backend matches the exact Vercel URL
- Include the protocol (`https://`) and no trailing slash
- Check that the backend is running and accessible

### VITE_API_URL Issues

- Ensure the URL includes the protocol (`https://`)
- Verify the backend is deployed and accessible
- Check that the backend URL is correct (no trailing slash)

---

## Example Production Configuration

### Backend (.env)
```env
PORT=3001
NODE_ENV=production
DATABASE_URL=postgresql://postgres:your_password@db.abc123.supabase.co:5432/postgres?sslmode=require
GEMINI_API_KEY=AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz123456
FRONTEND_URL=https://sakji-autoshop.vercel.app
```

### Frontend (.env)
```env
VITE_API_URL=https://sakji-autoshop-api.railway.app
```
