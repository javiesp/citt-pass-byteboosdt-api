import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura las opciones CORS si deseas habilitarlas para cualquier dominio
  const corsOptions = {
    origin: '*', // Permite cualquier dominio
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  };

  app.enableCors(corsOptions);

  // Escucha en el puerto proporcionado por env o en el puerto predeterminado (3000)
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}

bootstrap();
