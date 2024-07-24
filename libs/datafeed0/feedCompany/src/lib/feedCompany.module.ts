import { Module } from '@nestjs/common';
import { QUEUE_CLIENT } from './constants';
import { Datafeed0ConfigModule, DatafeedConfigService } from '@xemida/datafeed0-config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { FeedController } from './controllers/feedController';
import { FeedInitialDataUsecase } from './usecases/feedInitialData.usecase';

@Module({
  imports: [Datafeed0ConfigModule],
  controllers: [FeedController],
  providers: [
    {
      provide: QUEUE_CLIENT,
      useFactory: (configService: DatafeedConfigService) => {
        const queueClientOptions = configService.queueClientOptions;
        return ClientProxyFactory.create(queueClientOptions);
      },
      inject: [DatafeedConfigService],
    },

    FeedInitialDataUsecase
  ],
  exports: [],
})
export class FeedCompanyModule {}
