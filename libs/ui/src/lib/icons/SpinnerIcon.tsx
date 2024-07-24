import React from 'react';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, IconProps } from './IconProps';

const css = '.spinner_GuJz{transform-origin:center;animation:spinner_STY6 1.5s linear infinite}@keyframes spinner_STY6{100%{transform:rotate(360deg)}}'

export function SpinnerIcon({ width, height }: IconProps): React.JSX.Element {
  return (
    <svg fill="currentColor" width={width ?? DEFAULT_WIDTH} height={height ?? DEFAULT_HEIGHT} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <style>{css}</style>
      <g className="spinner_GuJz">
        <circle cx="3" cy="12" r="2" />
        <circle cx="21" cy="12" r="2" />
        <circle cx="12" cy="21" r="2" />
        <circle cx="12" cy="3" r="2" />
        <circle cx="5.64" cy="5.64" r="2" />
        <circle cx="18.36" cy="18.36" r="2" />
        <circle cx="5.64" cy="18.36" r="2" />
        <circle cx="18.36" cy="5.64" r="2" />
      </g>
    </svg>
  );
}
