import React from 'react';
import { PrimitiveAtom, useAtom } from 'jotai/index';
import { WidgetMeta } from '../../entities/widget';
import { getChartComponent } from '../../entities/chart/ui/getChartComponent';
import { useFetchDataSource } from '../../entities/datasource';
import { SpinnerIcon } from '@xemida/ui/icons';

export function ChartWidget({ widgetAtom }: { widgetAtom: PrimitiveAtom<WidgetMeta> }): React.JSX.Element {
  const [widget] = useAtom(widgetAtom);
  const Chart = getChartComponent(widget.chartMeta.type);
  const { data, loading } = useFetchDataSource(widget.dsUid, widget.dsProperties);

  return (
    <>
      {loading && (
        <div className="w-full h-full flex items-center justify-center text-violet-500">
          <SpinnerIcon width={50} height={50}/>
        </div>
      )}
      {!loading && <Chart data={data} widgetMeta={widget} loading={loading} />}
    </>
  );
}
