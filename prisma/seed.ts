import { PrismaClient } from '@prisma/client';
import { PasswordService } from '../src/shared/utilities/password.service';

const prisma = new PrismaClient();
const passwordService = new PasswordService();

async function main() {
    await prisma.company.deleteMany();
    await prisma.user.deleteMany();

    // createMany

    await prisma.company.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: 'Company1',
            description: 'Company1 description',
            address: 'Novi Sad, Ilije Bircanina 33',
        },
    });

    await prisma.user.upsert({
        where: { email: 'petar@example.com' },
        update: {},
        create: {
            id: 1,
            email: 'petar@example.com',
            password: await passwordService.hashPassword('123'),
            firstName: 'Petar',
            lastName: 'Petrovic',
            country: 'Serbia',
            city: 'Novi Sad',
            phone: '123',
            occupation: 'No occupation.',
            companyInfo: 'There is no company info.',
            companyId: 1,
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
