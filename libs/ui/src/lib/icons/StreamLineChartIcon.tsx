import React from 'react';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, IconProps } from './IconProps';

export function StreamLineChartIcon({ width, height }: IconProps): React.JSX.Element {
  return (
    <svg width={width ?? DEFAULT_WIDTH} height={height ?? DEFAULT_HEIGHT} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3 5.49998C13.3 5.49998 11.5246 9.77055 9.41088 9.38907C7.94346 9.12423 8.17838 6.95399 6.71096 6.68915C4.59723 6.30767 2.82187 10.5782 2.82187 10.5782"
        stroke="#BFBFBF"
        strokeLinecap="round"
      />
      <path d="M2.82188 10.5783C2.82188 10.5783 4.59723 6.3077 6.71097 6.68918" stroke="#C650DA" strokeLinecap="round" />
    </svg>
  );
}
