import React, { ComponentProps } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import { PropsWithClassNameAndChildren } from './props';
import clsx from 'clsx';

export function Button({
  className,
  children,
  ...props
}: PropsWithClassNameAndChildren<ComponentProps<typeof HeadlessButton>>): React.JSX.Element {
  return (
    <HeadlessButton
      className={clsx(
        'inline-flex items-center gap-2 py-[7px] px-[15px]',
        'bg-violet-800 text-gray-400 rounded-md transition-colors',
        'hover:text-white focus:outline-none',
        className,
      )}
      {...props}
    >
      {children}
    </HeadlessButton>
  );
}
