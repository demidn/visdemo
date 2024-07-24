import React, { ReactNode, useRef } from 'react';
import { WidgetMeta } from '../model/WidgetMeta';
import Moveable, { OnDrag, OnResize } from 'react-moveable';
import { PrimitiveAtom, useAtom } from 'jotai';
import { useBringToFront } from '../model/useBringToFront';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useRemoveWidget } from '../../visualization/@x/widget';

export function Container({
  widgetAtom,
  slotBottomRight,
  slotChartWidget,
}: {
  widgetAtom: PrimitiveAtom<WidgetMeta>;
  slotBottomRight?: ReactNode;
  slotChartWidget?: ReactNode;
}): React.JSX.Element {
  const [widget] = useAtom(widgetAtom);
  const { removeWidget } = useRemoveWidget();
  const { bringToFront } = useBringToFront();
  const { width, height, x, y } = widget;
  const isConnected = widget.dsUid !== undefined;

  const targetRef = useRef<HTMLDivElement>(null);

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    left: `${x}px`,
    top: `${y}px`,
  };

  const handleDrag = ({ left, top, translate, target }: OnDrag) => {
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;

    // setWidget(w => ({...w, x: left, y: top}))
  };

  const handleResize = ({ width, height, style, target }: OnResize) => {
    target.style.width = style.width;
    target.style.height = style.height;
    target.style.transform = style.transform;
  };

  const handleClose = () => {
    removeWidget(widget.uid);
  };

  const Icon = widget.chartMeta.icon;

  return (
    <>
      <div
        className="absolute p-[5px] flex items-center justify-center bg-white/80  z-[3000]"
        style={style}
        ref={targetRef}
        onMouseDown={() => bringToFront(widget)}
      >
        <div
          className="absolute top-[5px] right-[5px] flex items-center justify-center w-[20px] h-[20px] text-black cursor-pointer z-[4000]"
          onClick={handleClose}
        >
          <XMarkIcon width={16} height={16} />
        </div>
        {!isConnected && (
          <>
            <Icon width={'70%'} height={'70%'} />
            <div>Please connect datasource</div>
            <div className="absolute bottom-0 right-0">{slotBottomRight}</div>
          </>
        )}
        {isConnected && slotChartWidget}
      </div>
      <Moveable
        target={targetRef}
        draggable
        resizable
        snappable
        bounds={{
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          position: 'css',
        }}
        onDrag={handleDrag}
        onResize={handleResize}
      />
    </>
  );
}
