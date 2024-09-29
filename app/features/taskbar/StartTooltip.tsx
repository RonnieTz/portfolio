'use client';

import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const StartTooltip = () => {
  const { start } = useSelector((state: RootState) => state.app);
  return (
    <>
      {start.hover && <div className="start-tooltip">Click here to begin</div>}
    </>
  );
};

export default StartTooltip;
