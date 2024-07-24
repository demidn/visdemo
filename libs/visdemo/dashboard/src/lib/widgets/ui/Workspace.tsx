'use client';

import React, { PropsWithChildren, useState } from 'react';
import { Container, WidgetMeta } from '../../entities/widget';
import { ConnectDialog } from './ConnectDialog';
import { PropsWithClassName } from '@xemida/ui';
import { TableCellsIcon } from '@heroicons/react/16/solid';
import { useWidgetAtoms } from '../../entities/visualization';
import { ChartWidget } from './ChartWidget';
import { PrimitiveAtom, useAtom } from 'jotai';

function ConnectDataSource({ className, widgetUid, widgetAtom }: PropsWithClassName<{ widgetUid: string, widgetAtom: PrimitiveAtom<WidgetMeta> }>): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [widgetMeta] = useAtom(widgetAtom);

  return (
    <>
      <ConnectDialog open={open} onClose={() => setOpen(false)} widgetMeta={widgetMeta} />

      <div
        className={`flex items-center cursor-pointer gap-[10px] h-[30px] px-[20px] text-white bg-violet-500 ${className}`}
        onClick={() => setOpen(true)}
      >
        <TableCellsIcon width={16} height={16} />
        Connect
      </div>
    </>
  );
}

export function Workspace({ children }: PropsWithChildren): React.JSX.Element {
  const { widgetAtoms, uids } = useWidgetAtoms();
  return (
    <div className="flex-1 p-[25px] relative bg-[url(/images/bg.webp)] bg-repeat bg-white bg-[length:16px_16px]">
      {widgetAtoms.map((widgetAtom, index) => (
        <Container
          key={uids[index]}
          widgetAtom={widgetAtom}
          slotBottomRight={<ConnectDataSource widgetUid={uids[index]} widgetAtom={widgetAtom}/>}
          slotChartWidget={<ChartWidget widgetAtom={widgetAtom} />}
        />
      ))}
    </div>
  );
}
