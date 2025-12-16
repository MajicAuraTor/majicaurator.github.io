import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

// Routes
import projectRoutes from './routes/projects.js';
import experienceRoutes from './routes/experiences.js';
import contactRoutes from './routes/contacts.js';
import authRoutes from './routes/auth.js';
import contactFormRoute from './routes/contact.js';

dotenv.config();
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactFormRoute);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const attemptListen = (port, retries = 5) => {
  return new Promise((resolve, reject) => {
    const server = app.listen(port);

    server.on('listening', () => {
      resolve({ server, port });
    });

    server.on('error', (err) => {
      if (err && err.code === 'EADDRINUSE' && retries > 0) {
        console.warn(`Port ${port} in use, trying ${port + 1}...`);
        // Try next port
        resolve(attemptListen(port + 1, retries - 1));
      } else {
        reject(err);
      }
    });
  });
};

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Connected to database');

    const { port } = await attemptListen(Number(PORT));
    console.log(`🚀 Server running on port ${port}`);
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully');
  await prisma.$disconnect();
  process.exit(0);
});