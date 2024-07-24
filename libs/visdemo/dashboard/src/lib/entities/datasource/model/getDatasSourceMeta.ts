import { DATASOURCES_META } from './datasources';

export function getDataSourceMeta(uid: string) {
  return DATASOURCES_META.find((meta) => meta.uid === uid);
}
