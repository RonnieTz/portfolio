import restart from '@/public/Restart.png';
import turnoff from '@/public/Power.png';
import standby from '@/public/Standby.png';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { resetApp, setTurnOff, setTurningOff } from '@/app/redux/app/appSlice';
import Tooltip from './Tooltip';
import './styles.css';
import { useState } from 'react';
import Button from './Button';

const Middle = () => {
  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [tooltipTimout, setTooltipTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const dispatch = useDispatch();
  return (
    <div className="middle">
      {/* <Image
        style={{ height: '30%', width: 'auto', opacity: 0.4 }}
        src={standby}
        alt="restart"
      />
      <div
        onMouseEnter={() => {
          const timeout = setTimeout(() => {
            setShowTooltip1(true);
          }, 500);
          setTooltipTimeout(timeout);
        }}
        onMouseLeave={() => {
          if (tooltipTimout) clearTimeout(tooltipTimout);
          setShowTooltip1(false);
        }}
        onClick={() => {
          dispatch(setTurnOff(false));
          dispatch(setTurningOff(true));
          setTimeout(() => {
            dispatch(setTurningOff(false));
            window.location.href = 'https://www.google.com';
            dispatch(resetApp());
          }, 3000);
        }}
        className="turn-off-button-icon"
      >
        <Image
          style={{ height: '100%', width: 'auto' }}
          src={turnoff}
          alt="turnoff"
        />

        <span className="turn-off-button-text">Turn Off</span>
        {showTooltip1 && (
          <Tooltip
            title="Turn Off"
            text="Shuts down Windows so you can safely turn off the computer."
          />
        )}
      </div>
      <div
        onMouseEnter={() => {
          const timeout = setTimeout(() => {
            setShowTooltip2(true);
          }, 500);
          setTooltipTimeout(timeout);
        }}
        onMouseLeave={() => {
          if (tooltipTimout) clearTimeout(tooltipTimout);
          setShowTooltip2(false);
        }}
        onClick={() => {
          dispatch(setTurnOff(false));
          dispatch(setTurningOff(true));
          setTimeout(() => {
            window.location.reload();
            dispatch(setTurningOff(false));
            dispatch(resetApp());
          }, 3000);
        }}
        className="turn-off-button-icon"
      >
        <Image
          style={{ height: '100%', width: 'auto' }}
          src={restart}
          alt="restart"
        />
        <span className="turn-off-button-text">Restart</span>
        {showTooltip2 && (
          <Tooltip
            title="Restart"
            text="Shuts down Window and then starts Windows again."
          />
        )}
      </div> */}
      <Button
        text="Puts the computer into a low-power state so you can quickly resume your work."
        title="Standby"
      />
      <Button
        text="Shuts down Windows so you can safely turn off the computer."
        title="Turn Off"
      />
      <Button
        text="Shuts down Window and then starts Windows again."
        title="Restart"
      />
    </div>
  );
};
export default Middle;
