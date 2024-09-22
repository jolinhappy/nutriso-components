import React from 'react';
import {
  Tabs as ShadTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'SRC/components/ui/Tabs/ShadTabs';

export interface TabList {
  labelValue: string;
  value: React.ReactNode;
}
interface TabProps {
  defaultValue?: string;
  tabList: TabList[];
}
const Tabs = ({ defaultValue, tabList }: TabProps) => {
  return (
    <ShadTabs defaultValue={defaultValue} className="w-full">
      <TabsList>
        {tabList.map((tab) => (
          <TabsTrigger value={tab.labelValue}>{tab.labelValue}</TabsTrigger>
        ))}
      </TabsList>
      {tabList.map((tab) => (
        <TabsContent value={tab.labelValue}>{tab.value}</TabsContent>
      ))}
    </ShadTabs>
  );
};

export { Tabs };
