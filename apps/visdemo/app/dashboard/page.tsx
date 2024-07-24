import { ChartPane, ToolPane, Workspace } from '@xemida/dashboard';

export default function Index() {
  return (
    <div className="flex flex-1 pl-[110px]">
      <ToolPane />
      <ChartPane className="left-[110px]"/>
      <Workspace />
    </div>
  );
}
