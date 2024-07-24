import React, { useMemo } from 'react';
import { DatasourceComponent } from '../../datasource/@x/chart';
import { BarDatum, ResponsiveBarCanvas } from '@nivo/bar';
import { theme } from './options';
import { getRandomColor } from '@xemida/ui';
import { WidgetMeta } from '../../widget';

function Tooltip(point: { data: BarDatum }) {
  return (
    <div className="bg-black p-[20px] backdrop-blur-2xl z-[4000]">
      <div>X = {point.data.x}</div>
      <div>Y1 = {point.data.y1}</div>
      <div>Y2 = {point.data.y2}</div>
    </div>
  );
}

function getKeys(widgetMeta: WidgetMeta): string[] {
  return widgetMeta.chartMeta.properties.filter(prop => prop !== 'X' && widgetMeta.propertiesToColumns[prop] !== undefined).map(prop => prop.toLowerCase());
}

export function BarChart({ data, widgetMeta }: DatasourceComponent<Record<string, unknown>>): React.JSX.Element {
  const chartData = useMemo(() => {
    return data.map((d) => ({
      x: d[widgetMeta.propertiesToColumns['X']] as string,
      y1: d[widgetMeta.propertiesToColumns['Y1']] as number,
      y2: d[widgetMeta.propertiesToColumns['Y2']] as number,
      color: getRandomColor()
    }));
  }, [data, widgetMeta.propertiesToColumns]);
console.log(getKeys(widgetMeta),data, chartData);
  return (
    <ResponsiveBarCanvas
      data={chartData}
      keys={getKeys(widgetMeta)}
      indexBy="x"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: false }}
      theme={theme}
      margin={{ top: 10, right: 0, bottom: 35, left: 0 }}
      padding={0.1}
      isInteractive={true}
      tooltip={Tooltip}
      enableGridX
      enableGridY
      axisRight={null}
      axisTop={null}
      axisLeft={null}
      legends={[]}
    ></ResponsiveBarCanvas>
  );
}
