# Nest + Prisma + Postgres + JWT + Swagger (Vercel)

## Local
```bash
npm install
cp .env.example .env        # completa DATABASE_URL, DIRECT_URL y JWT_SECRET
npx prisma migrate dev --name init
npm run start:dev           # http://localhost:3000/docs
```

## Deploy en Vercel
1. Sube el repo a GitHub e impórtalo en Vercel (Framework Preset: **Other**).
2. Variables de entorno: `DATABASE_URL`, `DIRECT_URL`, `JWT_SECRET`, `JWT_EXPIRES_IN`.
3. Haz `prisma migrate dev` localmente y commitea la carpeta `prisma/migrations`;
   el script `vercel-build` ejecuta `prisma migrate deploy` en cada deploy.
4. Swagger queda en `https://tu-app.vercel.app/docs`.

## Endpoints
- `POST /auth/register`
- `POST /auth/login`
- `GET  /users/me`  (Bearer JWT)
