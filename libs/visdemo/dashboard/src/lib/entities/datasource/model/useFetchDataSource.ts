import { useEffect, useState } from 'react';
import { useDataSource } from './useDataSource';

export interface FetchDataSourceService<T extends Record<string, unknown> = Record<string, unknown>> {
  data: T[];
  loading: boolean;
}
export function useFetchDataSource(dsUid: string | undefined, dsProperties: Record<string, string>): FetchDataSourceService {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(false);
  const ds = useDataSource(dsUid)

  useEffect(() => {
    if (dsUid === undefined) {
      setData([]);
      return;
    }

    if (ds === undefined) {
      return;
    }

    setLoading(true);
    if (ds.meta.type === 'stream') {
      return ds.watchData((d) => {
        setLoading(false);
        setData(d);
      });
    } else if (ds.meta.type === 'simple') {
      ds.getData()
        .then(setData)
        .finally(() => setLoading(false));
    } else if(ds.meta.type === 'custom'){
      // similar to the simple ds for now
      ds.getData(dsProperties)
        .then(setData)
        .finally(() => setLoading(false));
    }


  }, [ds, dsUid]);

  return {
    data,
    loading,
  };
}
