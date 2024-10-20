import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  //prefix antes de consultar endpoints
  app.setGlobalPrefix('api/v1');
}
bootstrap();
