import React from 'react';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, IconProps } from './IconProps';
import { PropsWithClassName } from '../props';

export function BarChartIcon({ className, width, height }: PropsWithClassName<IconProps>): React.JSX.Element {
  return (
    <svg className={className ?? ''} width={width ?? DEFAULT_WIDTH} height={height ?? DEFAULT_HEIGHT} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_12_5656)">
        <path d="M1.5 1.39999V14.4C1.5 14.4552 1.54477 14.5 1.6 14.5H14.6" stroke="#BFBFBF" strokeLinecap="round" />
        <path d="M12.6 3.5L12.6 12.1" stroke="#C650DA" strokeLinecap="round" />
        <path d="M9.7 8.70001L9.7 12.1" stroke="#BFBFBF" strokeLinecap="round" />
        <path d="M6.79999 7.5L6.79999 12.1" stroke="#C650DA" strokeLinecap="round" />
        <path d="M3.89999 10.8L3.89999 12.1" stroke="#BFBFBF" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_12_5656">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
