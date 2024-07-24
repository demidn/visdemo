import React from 'react';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, IconProps } from './IconProps';

export function LineChartIcon({ width, height }: IconProps): React.JSX.Element {
  return (
    <svg width={width ?? DEFAULT_WIDTH} height={height ?? DEFAULT_HEIGHT} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_12_5833)">
        <path d="M1.5 1.39999V14.4C1.5 14.4552 1.54477 14.5 1.6 14.5H14.6" stroke="#BFBFBF" strokeLinecap="round" />
        <path
          d="M14.2781 5.44551C14.2781 5.44551 12.5027 9.71608 10.389 9.3346C8.92158 9.06976 9.1565 6.89951 7.68908 6.63468C5.57535 6.25319 3.79999 10.5238 3.79999 10.5238"
          stroke="#C650DA"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_5833">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
