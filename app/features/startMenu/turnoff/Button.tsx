import { useState } from 'react';
import { useRedux } from '@/app/utilities/hooks/useRedux';
import { setTurnOff, setTurningOff, resetApp } from '@/app/redux/app/appSlice';
import Tooltip from './Tooltip';
import Image from 'next/image';
import restart from '@/public/Restart.png';
import turnoff from '@/public/Power.png';
import standby from '@/public/Standby.png';
import './styles.css';

type Props = {
  title: 'Restart' | 'Turn Off' | 'Standby';
  text: string;
};

const Button = ({ text, title }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipTimout, setTooltipTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const [dispatch] = useRedux();
  return (
    <div
      onMouseEnter={() => {
        if (title === 'Standby') {
          return;
        }
        const timeout = setTimeout(() => {
          setShowTooltip(true);
        }, 500);
        setTooltipTimeout(timeout);
      }}
      onMouseLeave={() => {
        if (tooltipTimout) clearTimeout(tooltipTimout);
        setShowTooltip(false);
      }}
      onClick={() => {
        if (title === 'Standby') {
          return;
        }
        dispatch(setTurnOff(false));
        dispatch(setTurningOff(true));
        setTimeout(() => {
          dispatch(setTurningOff(false));
          dispatch(resetApp());
          if (title === 'Restart') {
            window.location.reload();
          } else {
            window.location.href = 'https://www.google.com';
          }
        }, 3000);
      }}
      className="turn-off-button-icon"
      id={title}
    >
      <Image
        style={{
          height: '100%',
          width: 'auto',
          opacity: title === 'Standby' ? 0.4 : 1,
        }}
        src={
          title === 'Restart'
            ? restart
            : title === 'Turn Off'
            ? turnoff
            : standby
        }
        alt="turnoff"
      />

      <span
        style={{ opacity: title === 'Standby' ? 0.4 : 1 }}
        className="turn-off-button-text"
      >
        {title}
      </span>
      {showTooltip && <Tooltip title={title} text={text} />}
    </div>
  );
};
export default Button;
