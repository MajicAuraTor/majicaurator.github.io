import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: { order: 'asc' }
    });
    res.json(experiences);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
});

export default router;