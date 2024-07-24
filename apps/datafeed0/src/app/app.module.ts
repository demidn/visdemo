import { Module } from '@nestjs/common';


import { ConfigModule } from '@nestjs/config';
import { Datafeed0ConfigModule } from '@xemida/datafeed0-config';
import { FeedCompanyModule } from '@xemida/datafeed0-feedCompany';

@Module({
  imports: [ConfigModule.forRoot(), Datafeed0ConfigModule, FeedCompanyModule],
})
export class AppModule {}
