import React, { PropsWithChildren, ReactNode } from 'react';

function LayoutRoot({ children }: PropsWithChildren): React.JSX.Element {
  return <div className={`flex h-full pt-[60px] bg-black`}>{children}</div>;
}

function Workspace({ children }: PropsWithChildren): React.JSX.Element {
  return <div className="flex flex-1 relative">{children}</div>;
}

function Topmenu({ children }: PropsWithChildren): React.JSX.Element {
  return <div className="fixed h-[60px] pr-[40px] flex flex-row inset-x-0 items-center top-0 border-b border-b-black-800">{children}</div>;
}

function Aside({ children }: PropsWithChildren): React.JSX.Element {
  return (
    <div className="fixed h-full left-0 w-[110px] top-[60px] bottom-0 pt-[20px] flex flex-col items-center border-r border-r-black-800">
      {children}
    </div>
  );
}

function NavItem({ icon, name, isActive }: { icon: ReactNode; name: string; isActive: boolean }): React.JSX.Element {
  const isActiveClass = "bg-black-400 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:border-l-2";
  return (
    <div className={`relative flex flex-col items-center w-full p-[20px] gap-[15px] cursor-pointer ${isActive && isActiveClass}`}>
      {icon}
      {name}
    </div>
  );
}

export const Layout = Object.assign(LayoutRoot, { Topmenu, Workspace, Aside, NavItem });
