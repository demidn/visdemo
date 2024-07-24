import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Signal } from '../models/signal';
import { SignalPresenter } from './signal.presenter';
import { FakeSignalsUsecase } from '../usecases/fake-signals.usecase';
import { InitialSignalsUsecase } from '../usecases/initial-signals.usecase';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SignalGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  clients: Set<Socket> = new Set();

  constructor(private signalsUsecase: FakeSignalsUsecase, private initialSignalsUsecase: InitialSignalsUsecase) {
    const handler = (signal: Signal) => {
      if (!this.server) {
        console.log('Server is not initialized');
        return;
      }
      this.server.emit('data', new SignalPresenter(signal.datetime, signal.value));
    };
    this.signalsUsecase.execute(handler);
  }

  handleConnection(client: Socket) {
    // todo: strange UI - recheck
    // this.initialSignalsUsecase.execute((signal) => client.emit('data', signal))
    this.clients.add(client);
  }
  handleDisconnect(client: Socket) {
    this.clients.delete(client);
  }
}
