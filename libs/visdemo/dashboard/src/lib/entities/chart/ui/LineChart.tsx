import React, { useMemo } from 'react';
import { DatasourceComponent } from '../../datasource/@x/chart';
import { theme } from './options';
import { ResponsiveLineCanvas } from '@nivo/line';

export function LineChart({ data, widgetMeta }: DatasourceComponent<Record<string, unknown>>): React.JSX.Element {
  const chartData = useMemo(() => {
    const points = data.map((d) => ({
      x: d[widgetMeta.propertiesToColumns['X']] as string,
      y: d[widgetMeta.propertiesToColumns['Y']] as number,
    }));

    return [{ id: 'main', data: points }];
  }, [data, widgetMeta.propertiesToColumns]);
  return (
    <ResponsiveLineCanvas
      data={chartData}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear' }}
      theme={theme}
      colors={'#C650DA'}
      margin={{ top: 10, right: 0, bottom: 35, left: 0 }}
      isInteractive={true}
      enableGridX
      enableGridY
      axisRight={null}
      axisTop={null}
      axisLeft={null}
      legends={[]}
    ></ResponsiveLineCanvas>
  );
}
