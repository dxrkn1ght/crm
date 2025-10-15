
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const router = Router();

router.get('/', async (req, res) => {
  const prisma: PrismaClient = req.app.get('prisma');
  const students = await prisma.student.findMany({ include: { payments: true, attendances: true, group: true } });
  res.json(students);
});

router.post('/', async (req, res) => {
  const prisma: PrismaClient = req.app.get('prisma');
  const { fullName, phone, groupId } = req.body;
  if (!fullName || !phone) return res.status(400).json({ error: 'fullName and phone required' });
  const student = await prisma.student.create({ data: { fullName, phone, groupId } });
  res.json(student);
});

router.get('/:id', async (req, res) => {
  const prisma: PrismaClient = req.app.get('prisma');
  const student = await prisma.student.findUnique({ where: { id: req.params.id }, include: { payments: true, attendances: true, group: true } });
  if (!student) return res.status(404).json({ error: 'Not found' });
  res.json(student);
});

export default router;
