
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.user.upsert({
    where: { email: 'admin@crm.local' },
    update: {},
    create: {
      email: 'admin@crm.local',
      password: 'password',
      role: 'ADMIN'
    }
  })

  const course = await prisma.course.create({ data: { name: 'Ingliz tili', duration: 3, price: 300 } })
  const group = await prisma.group.create({ data: { name: 'Ingliz - 101', courseId: course.id } })
  await prisma.student.create({ data: { fullName: 'Ali Valiyev', phone: '+998901234567', groupId: group.id } })
  console.log('Seed finished.')
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
