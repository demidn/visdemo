import { Injectable } from '@nestjs/common';
import { Signal } from '../models/signal';

@Injectable()
export class SignalsBuffer {
  buffer: Signal[] = [];

  push(signal: Signal) {
    if (this.buffer.length > 20) {
      this.buffer.shift();
    }

    this.buffer.push(signal);
  }
}
