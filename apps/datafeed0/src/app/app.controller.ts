import { Controller } from '@nestjs/common';

@Controller()
export class AppController {
  // get queueName() {
  //   return this.config.queueName;
  // }
  // constructor(@Inject(QUEUE_CLIENT) private client: ClientProxy, private config: DatafeedConfigService) {}
  //
  // @Get('/send')
  // async feedCompanyData() {
  //   console.log('Emitting: ', `${this.queueName}:CompanyStat`, { company: 'WB', sales: 12 })
  //   this.client.emit(`${this.queueName}:CompanyStat`, { company: 'WB', sales: 12 }).pipe(take(1)).subscribe(d => console.log(d));
  //   this.client.emit(`${this.queueName}:CompanyStat`, { company: 'WB', sales: 13 }).pipe(take(1)).subscribe();
  //   this.client.emit(`${this.queueName}:CompanyStat`, { company: 'WB', sales: 14 }).pipe(take(1)).subscribe();
  //   this.client.emit(`${this.queueName}:CompanyStat`, { company: 'WB', sales: 15 }).pipe(take(1)).subscribe();
  //   return 'OK';
  // }
}
