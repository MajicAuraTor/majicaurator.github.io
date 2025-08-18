import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// POST contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const contact = await prisma.contact.create({
      data: { name, email, message }
    });
    
    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      id: contact.id 
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

export default router;