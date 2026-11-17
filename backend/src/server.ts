import 'dotenv/config';
import { app } from './app';
import { redisConnection } from './config/redis';

const PORT = Number(process.env.PORT) || 3333;

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/api/v1/health`);
});

process.on('SIGTERM', async () => {
  console.log('Encerrando servidor...');
  await redisConnection.quit();
  server.close(() => {
    process.exit(0);
  });
});