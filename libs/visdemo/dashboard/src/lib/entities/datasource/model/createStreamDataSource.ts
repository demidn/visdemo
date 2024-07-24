import { io } from 'socket.io-client';
import { DataSource } from './DataSource';
import { DataSourceMeta } from './DataSourceMeta';

let socket: ReturnType<typeof io> | null = null;

export function createStreamDataSource(url: string, meta: DataSourceMeta, bufferLength = 20): DataSource {
  let buffer: Record<string, unknown>[] = [];

  const push = (d: Record<string, unknown>) => {
    if (buffer.length > 15) {
      buffer.shift();
    }

    buffer = [...buffer, d];
  };
  const ds: DataSource = {
    meta,

    async getData(): Promise<Record<string, unknown>[]> {
      return Promise.resolve([]);
    },

    watchData(callback: (data: Record<string, unknown>[]) => void): () => void {
      if(!process.env.NEXT_PUBLIC_API_URL) {
        console.error('API URL is not defined');
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
      }
      if (!socket) {
        socket = io(process.env.NEXT_PUBLIC_API_URL);

        socket.on('connect', () => console.log('Socket connected'));
        socket.on('disconnect', () => console.log('Socket disconnected'));
      }

      socket.on('data', (message: Record<string, unknown>) => {
        push(message);
        callback(buffer);
      });

      socket.connect();

      return () => {
        socket && socket.disconnect();
      };
    },
  };

  return ds;
}
