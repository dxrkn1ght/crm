
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const router = Router();

router.get('/', async (req, res) => {
  const prisma: PrismaClient = req.app.get('prisma');
  const items = await prisma.attendance.findMany({ include: { student: true, group: true } });
  res.json(items);
});

router.post('/', async (req, res) => {
  const prisma: PrismaClient = req.app.get('prisma');
  const { studentId, groupId, date, status } = req.body;
  if (!studentId || !groupId || !date) return res.status(400).json({ error: 'studentId, groupId and date required' });
  const item = await prisma.attendance.create({ data: { studentId, groupId, date: new Date(date), status: status || 'PRESENT' } });
  res.json(item);
});

export default router;
