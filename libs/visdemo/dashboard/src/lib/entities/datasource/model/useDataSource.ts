import { DataSource } from './DataSource';
import { useEffect, useState } from 'react';
import { getDatasource } from './datasources';

export function useDataSource(uid: string | undefined): DataSource | undefined {
  const [dataSource, setDataSource] = useState<DataSource | undefined>();

  useEffect(() => {
    if(uid === undefined) {
      setDataSource(undefined);
      return;
    }

    getDatasource(uid)?.then((ds) => {
      setDataSource(ds);
    })
  }, [uid])

  return dataSource
}
