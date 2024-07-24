import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ApiConfigService } from '@xemida/api-config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as yaml from "yaml";
import * as fs from 'node:fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ApiConfigService);

  const config = new DocumentBuilder()
    .setTitle('Data API')
    .setDescription('Responses with different data from feeds')
    .setVersion('1.0')
    .addTag('dev')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const onlyFakeApi = configService.onlyFakeApi;

  const yamlString: string = yaml.stringify(document, {});
  fs.writeFileSync( "./openapi.yaml", yamlString);

  // CORS setup
  app.enableCors({
    origin: configService.allowedOrigins,
  });

  if(!onlyFakeApi) {
    app.connectMicroservice<MicroserviceOptions>(configService.queueClientOptions);
  }

  await app.startAllMicroservices();
  console.log('-- Started microservices');

  await app.listen(configService.httpPort);
  console.log(`-- Started HTTP server on port ${configService.httpPort}`);
}

bootstrap().catch((error) => {
  console.error('Failed to start the application:', error);
});
