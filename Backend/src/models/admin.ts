import { PrismaClient } from '../generated/prisma/client';
import bcrypt from 'bcrypt';


const prisma = new PrismaClient();

async function createAdmin() {
 
  const existingAdmin = await prisma.Admin.findUnique({
    where: { email: 'admin@google.com' },
  });

  if (!existingAdmin) {
   
    const hashedPassword = await bcrypt.hash('adm1nHack3r', 10);

    const admin = await prisma.Admin.create({
      data: {
        email: 'admin@google.com',
        password: hashedPassword,
        role: 'ADMIN', 
        firstName: "John",
        lastName: "Doe",
      },
    });

    console.log('Admin user created:', admin.email);
  } else {
    console.log('Admin user already exists:', existingAdmin.email);
  }
}


createAdmin()
  .catch(e => {
    console.error('Error creating admin:', e);
    process.exit(1);
  })
  .finally(async () => {
   
    await prisma.$disconnect();
  });
