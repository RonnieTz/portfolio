'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import AllProjectsButton from './AllProjectsButton';
import AllProjectsMenu from './AllProjectsMenu';
import MenuBackgroundImage from './MenuBackgroundImage';
import RightSide from './RightSide';
import Divider from './Divider';
import StartMenuPhoto from './StartMenuPhoto';
import TurnOff from './TurnOff';

const Menu = () => {
  const dispatch = useDispatch();
  const { start } = useSelector((state: RootState) => state.app);
  const [openMenu, setOpenMenu] = useState(false);
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout | null>(null);

  return (
    <div
      style={{
        width: !start.open ? '0' : '35%',
        height: !start.open ? '0' : '75%',
        minWidth: !start.open ? '0' : '350px',
        minHeight: !start.open ? '0' : '580px',
        borderRadius: '10px 10px 0 0',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        zIndex: 100,
        position: 'absolute',
        transition: 'all 0.2s',
        bottom: '35px',
      }}
    >
      <MenuBackgroundImage />
      <TurnOff />
      <RightSide></RightSide>
      <AllProjectsButton
        setTimeoutID={setTimeoutID}
        setOpenMenu={setOpenMenu}
        timeoutID={timeoutID}
      />
      {openMenu && (
        <AllProjectsMenu
          setTimeoutID={setTimeoutID}
          setOpenMenu={setOpenMenu}
          timeoutID={timeoutID}
        />
      )}
      <Divider />
      <StartMenuPhoto />
    </div>
  );
};

export default Menu;
