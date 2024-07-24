import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';

const DEFAULT_QUEUE_URL = 'amqp://localhost:5672';

@Injectable()
export class DatafeedConfigService {
  constructor(private configService: ConfigService) {}

  get queueName(): string{
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

  get owmQueueClientOptions(): ClientOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('QUEUE_URL', DEFAULT_QUEUE_URL)],
        queue: "Datafeed",
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
}
