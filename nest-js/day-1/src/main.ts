import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const server = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
};

void server(); // returns void

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// void bootstrap();
