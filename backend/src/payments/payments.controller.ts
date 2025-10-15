
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const router = Router();

router.get('/', async (req, res) => {
  const prisma: PrismaClient = req.app.get('prisma');
  const payments = await prisma.payment.findMany({ include: { student: true } });
  res.json(payments);
});

router.post('/', async (req, res) => {
  const prisma: PrismaClient = req.app.get('prisma');
  const { studentId, amount, method, comment } = req.body;
  if (!studentId || !amount) return res.status(400).json({ error: 'studentId and amount required' });
  const payment = await prisma.payment.create({ data: { studentId, amount: parseFloat(amount), method: method || 'naqd', comment } });
  res.json(payment);
});

export default router;
