import { useState } from 'react';
import Tooltip from '../Tooltip';

type Props = {
  isMenuOpen: 'File' | 'Edit' | 'Views' | false;
  setIsMenuOpen: React.Dispatch<
    React.SetStateAction<'File' | 'Edit' | 'Views' | false>
  >;
};

const Views = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const [hoverTimeOut, setHoverTimeOut] = useState<NodeJS.Timeout | null>(null);
  return (
    <div
      onMouseEnter={() => {
        if (isMenuOpen) {
          if (hoverTimeOut) clearTimeout(hoverTimeOut);
          const timeOut = setTimeout(() => {
            setIsMenuOpen('Views');
          }, 100);
          setHoverTimeOut(timeOut);
        }
      }}
      onMouseLeave={() => {
        if (hoverTimeOut) clearTimeout(hoverTimeOut);
      }}
      onClick={() => {
        setIsMenuOpen(isMenuOpen === 'Views' ? false : 'Views');
      }}
      className="topbar-title"
      style={{
        backgroundColor:
          isMenuOpen === 'Views' ? 'rgb(48, 104, 192)' : undefined,
        color: isMenuOpen === 'Views' ? 'rgb(228, 237, 242)' : undefined,
      }}
    >
      <span className="topbar-title-text">Views</span>
      {isMenuOpen === 'Views' && (
        <Tooltip>
          <>Views</>
        </Tooltip>
      )}
    </div>
  );
};
export default Views;
