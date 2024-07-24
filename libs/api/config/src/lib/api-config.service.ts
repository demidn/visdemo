import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const DEFAULT_QUEUE_URL = 'amqp://localhost:5672';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get onlyFakeApi(): boolean {
    return this.configService.get<boolean>('ONLY_FAKE_API') || false;
  }

  get queueName(): string {
    const queueName = this.configService.get<string>('QUEUE_NAME');

    if(queueName === undefined){
      throw new Error("Queue name must be defined");
    }

    return queueName;
  }

  get queueClientOptions(): ClientOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('QUEUE_URL', DEFAULT_QUEUE_URL)],
        queue: this.queueName,
        queueOptions: {
          durable: false,
        },
      },
    };
  }

  get allowedOrigins(): string {
    return this.configService.get('ALLOWED_ORIGINS') || '*';
  }

  get httpPort(): string {
    return this.configService.get('HTTP_PORT') || '8000';
  }

  get typeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      username: this.configService.get('DB_USER'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}
