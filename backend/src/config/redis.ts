import Redis from 'ioredis';

export const redisConnection = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
  maxRetriesPerRequest: null, // Obrigatório para o BullMQ
});

redisConnection.on('connect', () => {
  console.log('Redis conectado com sucesso');
});

redisConnection.on('error', (err) => {
  console.error('Erro na conexão com Redis:', err);
});