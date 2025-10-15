
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import studentsRouter from './students/students.controller';
import paymentsRouter from './payments/payments.controller';
import attendanceRouter from './attendance/attendance.controller';

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();
app.set('prisma', prisma);

app.get('/', (req, res) => res.send({ status: 'edu-crm backend', ok: true }));

app.use('/students', studentsRouter);
app.use('/payments', paymentsRouter);
app.use('/attendance', attendanceRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
