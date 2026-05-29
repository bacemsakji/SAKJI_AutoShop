FROM node:20-alpine AS builder
WORKDIR /app
COPY backend/package*.json ./backend/
RUN cd backend && npm install
COPY backend/ ./backend/
RUN cd backend && npm run build

FROM node:20-alpine
WORKDIR /app
COPY backend/package*.json ./backend/
RUN cd backend && npm install --production
COPY --from=builder /app/backend/dist ./backend/dist
EXPOSE 3001
CMD ["npm", "run", "start"]
WORKDIR /app/backend
