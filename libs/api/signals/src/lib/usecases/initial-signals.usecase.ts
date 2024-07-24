import { Injectable } from '@nestjs/common';
import { Signal } from '../models/signal';
import { SignalsBuffer } from './signals-buffer';

@Injectable()
export class InitialSignalsUsecase {
  constructor(private signalsBuffer: SignalsBuffer) {}

  execute(handler: (signal: Signal) => void) {
    this.signalsBuffer.buffer.forEach((signal) => handler(signal));
  }
}
