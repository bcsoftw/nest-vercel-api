import { PrismaClient} from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME ?? 'Admin';

  if (!email || !password) {
    throw new Error('Define ADMIN_EMAIL y ADMIN_PASSWORD para ejecutar el seed');
  }

  const admin = await prisma.user.upsert({
    where: { email },
    // Si ya existe, solo se asegura el rol (no pisa la contraseña)
    update: { },
    create: {
      email,
      name,
      password: await bcrypt.hash(password, 10)
    },
  });

  console.log(`Admin listo: ${admin.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
