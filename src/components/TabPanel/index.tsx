import { FC } from 'react';

interface TabPanelProps {
  value: number;
  index: number;
}

const TabPanel: FC<TabPanelProps> = ({ value, index, children }) => (
  <>{value === index ? children : null}</>
);

export default TabPanel;
