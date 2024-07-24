import { Inject, Injectable } from '@nestjs/common';
import { QUEUE_CLIENT } from '../constants';
import { ClientProxy } from '@nestjs/microservices';
import { COMPANIES } from '../factories/company.factory';

@Injectable()
export class FeedInitialDataUsecase {

  constructor(@Inject(QUEUE_CLIENT) private client: ClientProxy) {}

  execute () {
    this.client.emit('CompanyStatsQueue:Initial', COMPANIES);
  }
}
