import { Injectable } from '@nestjs/common';
import { Signal } from '../models/signal';
import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';
import { SignalsBuffer } from './signals-buffer';

const signalFactory = Factory.Sync.makeFactory<Signal>({
  datetime: Factory.each(() => new Date().toISOString()),
  value: Factory.each(() => faker.number.int({min: 100, max: 150}))
});

type Subscription = (signal: Signal) => void;

const DELAY = 2000;

@Injectable()
export class FakeSignalsUsecase {
  subscriptions: Subscription[] = [];

  constructor(private signalsBuffer: SignalsBuffer) {
    setInterval(() => this.pubSignal(), DELAY);
  }

  execute(handler: Subscription) {
    this.subscriptions.push(handler);
  }

  private pubSignal() {
    const signal = signalFactory.build()
    this.signalsBuffer.push(signal)
    this.subscriptions.forEach(sub => sub(signal))
  }
}
