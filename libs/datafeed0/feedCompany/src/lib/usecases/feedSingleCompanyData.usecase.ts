import { Inject, Injectable } from '@nestjs/common';
import { QUEUE_CLIENT } from '../constants';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class FeedSingleCompanyDataUsecase {
  constructor(@Inject(QUEUE_CLIENT) private client: ClientProxy) {}


  execute() {
  }
}
