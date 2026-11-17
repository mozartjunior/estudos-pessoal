import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { redisConnection } from './config/redis';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Rota de Healthcheck para validar API e Redis
app.get('/api/v1/health', async (_req, res) => {
  const redisStatus = redisConnection.status === 'ready' ? 'up' : 'down';

  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      api: 'up',
      redis: redisStatus,
    },
  });
});

export { app };