import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { DatafeedConfigService } from '@xemida/datafeed0-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(DatafeedConfigService);

  // CORS setup
  app.enableCors({
    origin: configService.allowedOrigins,
  });
  app.connectMicroservice<MicroserviceOptions>(configService.owmQueueClientOptions);

  await app.startAllMicroservices();
  console.log('-- Started microservices');

  await app.listen(configService.httpPort);
  console.log(`-- Started HTTP server on port ${configService.httpPort}`);
}
bootstrap().catch((error) => {
  console.error('Failed to start the application:', error);
});
