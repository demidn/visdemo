import { Injectable } from '@nestjs/common';

@Injectable()
export class FakeSubscribeSignalUsecase {
  async execute(): Promise<void> {}
}
