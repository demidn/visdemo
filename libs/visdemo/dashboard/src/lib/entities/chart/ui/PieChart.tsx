import React, { useMemo } from 'react';
import { DatasourceComponent } from '../../datasource/@x/chart';
import { theme } from './options';
import { PieTooltipProps, ResponsivePieCanvas } from '@nivo/pie';
import { getRandomColor } from '@xemida/ui';

function Tooltip({ datum }: PieTooltipProps<Record<string, unknown>>) {
  console.log(datum)
  return (
    <div className="bg-black p-[20px] backdrop-blur-2xl z-[4000]">
      <div>Company:{datum.data['id'] as string}</div>
      <div>Sales:{datum.data['value'] as string}</div>
    </div>
  );
}

export function PieChart({ data, widgetMeta }: DatasourceComponent<Record<string, unknown>>): React.JSX.Element {
  const chartData = useMemo(() => {
    return data.map((d) => ({
      id: d[widgetMeta.propertiesToColumns['ID']] as string,
      value: d[widgetMeta.propertiesToColumns['Value']] as number,
      color: getRandomColor(),
    }));
  }, [data, widgetMeta.propertiesToColumns]);

  return (
    <ResponsivePieCanvas
      data={chartData}
      theme={theme}
      margin={{ top: 10, right: 0, bottom: 35, left: 0 }}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      isInteractive={true}
      tooltip={Tooltip}
      legends={[]}
    ></ResponsivePieCanvas>
  );
}
