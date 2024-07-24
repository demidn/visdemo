import React, { ComponentProps } from 'react';
import { Dialog as HeadlessDialog, DialogPanel, DialogTitle } from '@headlessui/react';

function DialogRoot({ children, ...props }: ComponentProps<typeof HeadlessDialog>): React.JSX.Element {
  return <HeadlessDialog {...props}>{children}</HeadlessDialog>;
}

function Panel({ className, children, ...props }: ComponentProps<typeof DialogPanel>): React.JSX.Element {
  return (
    <div className="fixed inset-0 z-[5000] w-screen overflow-y-auto bg-black/70">
      <div className="flex min-h-full items-center justify-center p-4">
        <DialogPanel
          {...props}
          className={`${className} w-full max-w-md rounded-xl bg-black p-[20px] backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0`}
        >
          {children}
        </DialogPanel>
      </div>
    </div>
  );
}

function Title({ className, children, ...props }: ComponentProps<typeof DialogTitle>): React.JSX.Element {
  return <DialogTitle className={`${className ?? ''} text-[15px] font-medium text-white`} as="h3">{children}</DialogTitle>;
}

export const Dialog = Object.assign(DialogRoot, {DialogRoot, Panel, Title})
