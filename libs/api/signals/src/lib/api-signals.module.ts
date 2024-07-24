import { Module } from '@nestjs/common';
import { SignalGateway } from './gateways/signal.gateway';
import { FakeSignalsUsecase } from './usecases/fake-signals.usecase';
import { SignalsBuffer } from './usecases/signals-buffer';
import { InitialSignalsUsecase } from './usecases/initial-signals.usecase';

@Module({
  controllers: [],
  providers: [SignalGateway, FakeSignalsUsecase, SignalsBuffer, InitialSignalsUsecase],
  exports: [],
})
export class ApiSignalsModule {}
