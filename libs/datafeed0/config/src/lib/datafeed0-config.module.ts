import { Module } from '@nestjs/common';
import { DatafeedConfigService } from './DatafeedConfigService';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [DatafeedConfigService],
  exports: [DatafeedConfigService],
})
export class Datafeed0ConfigModule {}
