'use client';

import React from 'react';
import { PropsWithClassName } from '@xemida/ui';
import { ChartIcon } from '../../features/ui/ChartIcon';
import { CHARTS } from '../../entities';

export function ChartPane({ className }: PropsWithClassName): React.JSX.Element {
  return (
    <div className={`w-[300px] bg-black left-0 inset-y-0 p-[20px] ${className ?? ''}`}>
      <div className="w-full grid grid-cols-3 ">
        {CHARTS.map((chart) => (
          <ChartIcon key={chart.name} chart={chart} />
        ))}
      </div>
    </div>
  );
}
