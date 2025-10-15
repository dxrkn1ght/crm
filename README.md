
# Edu CRM — Starter repo

This repo contains a minimal full-stack starter:
- backend: Express + Prisma (TypeScript)
- frontend: Next.js (app dir)

## Requirements
- Node.js >= 18
- PostgreSQL

## Setup

1. Copy `.env.example` to `.env` and edit.
2. Backend:
   ```
   cd backend
   npm install
   npx prisma generate
   npx prisma migrate dev --name init
   node prisma/seed.js
   npm run start:dev
   ```
3. Frontend:
   ```
   cd frontend
   npm install
   npm run dev
   ```

API base: http://localhost:4000

Endpoints:
- GET /students
- POST /students
- GET /payments
- POST /payments
- GET /attendance
- POST /attendance

