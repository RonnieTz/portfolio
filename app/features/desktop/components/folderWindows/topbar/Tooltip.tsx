import { ReactNode } from 'react';

const Tooltip = ({ children }: { children: ReactNode }) => {
  return <div className="topbar-tooltip-container">{children}</div>;
};
export default Tooltip;
