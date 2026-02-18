# Prisma Database Layer

This project uses PostgreSQL with Prisma ORM.

## Models included

- `User` with role-based access (`ADMIN`, `CUSTOMER`)
- `Product` + `ProductVariant` (color, size, stock quantities)
- `PrintService` + `CustomPrintRequest` (supports design image URLs)
- `Order` + `OrderItem` (status tracking: `PENDING`, `PROCESSING`, `SHIPPED`, etc.)
- `Address` (shipping data linked to users and orders)

## Commands

```bash
npm run prisma:generate
npm run prisma:push
npm run prisma:migrate -- --name init_streetwear_schema
npm run prisma:studio
```

## Notes

- Set `DATABASE_URL` in `.env.local` before running Prisma commands.
- Keep `SUPABASE_SERVICE_ROLE_KEY` and all private DB credentials server-side only.
