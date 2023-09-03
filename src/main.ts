import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //? Solo deja los datos definidos en los DTO, no deja añadir datos adicionales
    }),
  );
  await app.listen(3000);
}
bootstrap();
