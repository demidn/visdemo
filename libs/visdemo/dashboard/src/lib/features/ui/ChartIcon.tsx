import React from 'react';
import { ChartMeta } from '../../entities';
import clsx from 'clsx';
import { useAddWidget } from '../../entities/visualization';

export function ChartIcon({ chart }: { chart: ChartMeta }): React.JSX.Element {
  const {addWidget} = useAddWidget()

  const handleClick = () => {
    addWidget(chart)
  };

  const Icon = chart.icon

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center w-[80px] h-[80px] gap-[10px]',
        'cursor-pointer opacity-90',
        'hover:opacity-100 hover:bg-silver-500/50 rounded transition-opacity',
      )}
      onClick={handleClick}
    >
      <Icon width={50} height={50} />
      <div className="text-xs text-center">{chart.name}</div>
    </div>
  );
}
