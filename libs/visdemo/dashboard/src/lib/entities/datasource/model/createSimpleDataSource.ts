import { DataSource } from './DataSource';
import { DataSourceMeta } from './DataSourceMeta';

export function createSimpleDataSource<R extends Record<string, unknown>>(
  urlOrFetcher: string | (() => Promise<R[]>),
  meta: DataSourceMeta,
): DataSource {
  const ds: DataSource = {
    meta,

    async getData(): Promise<Record<string, unknown>[]> {
      if (typeof urlOrFetcher === 'string') {
        // TODO
      } else {
        console.log('Getting via fetcher', urlOrFetcher());
        return urlOrFetcher();
      }
      return [];
    },

    watchData(callback: (data: Record<string, unknown>[]) => void): () => void {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return function () {};
    },
  };

  return ds;
}
