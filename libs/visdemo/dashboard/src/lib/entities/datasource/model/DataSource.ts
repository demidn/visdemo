import { DataSourceMeta } from './DataSourceMeta';

export type DSDatum = Record<string, unknown>


export interface DataSource<T = DSDatum> {
  meta: DataSourceMeta;
  getData(dsProperties?: Record<string, string>): Promise<T[]>;
  watchData(callback: (data: T[]) => void): () => void;
}
