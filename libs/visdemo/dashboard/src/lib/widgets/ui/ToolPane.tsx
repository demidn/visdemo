import React, { PropsWithChildren, ReactNode } from 'react';
import { ChartBarIcon } from '@heroicons/react/16/solid';

function Item({ icon, name, isActive }: { icon: ReactNode; name: string; isActive: boolean }): React.JSX.Element {
  const isActiveClass = "bg-black-400 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:border-l-2";
  return (
    <div className={`relative flex flex-col items-center w-full p-[20px] gap-[15px] cursor-pointer ${isActive && isActiveClass}`}>
      {icon}
      {name}
    </div>
  );
}

export function ToolPane({ children }: PropsWithChildren): React.JSX.Element {
  return (
    <div className="fixed h-full left-0 w-[110px] top-[60px] bottom-0 pt-[20px] flex flex-col items-center border-r border-r-black-800">
      <Item icon={<ChartBarIcon width={16} height={16} />} name="Charts" isActive />
    </div>
  );
}
