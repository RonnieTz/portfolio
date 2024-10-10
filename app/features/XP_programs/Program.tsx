import Minesweeper from './minesweeper/Minesweeper';

type WindowProps = {
  windowID: string;
  title: string;
  logo: any;
  size: { width: number; height: number };
  fixedSize: boolean;
  fullScreen: boolean;
  minimized: boolean;
  focused: boolean;
  zIndex: number;
  position: { y: number; x: number };
  selected: boolean;
  open: boolean;
  subWindow: string;
};

const Program = ({
  fixedSize,
  focused,
  fullScreen,
  logo,
  minimized,
  size,
  title,
  windowID,
  zIndex,
  open,
  position,
  selected,
  subWindow,
}: WindowProps) => {
  return (
    <>
      {title === 'Minesweeper' && (
        <Minesweeper
          fixedSize={fixedSize}
          focused={focused}
          fullScreen={fullScreen}
          logo={logo}
          minimized={minimized}
          size={size}
          title={title}
          windowID={windowID}
          zIndex={zIndex}
          open={open}
          position={position}
          selected={selected}
          subWindow={subWindow}
        />
      )}
    </>
  );
};
export default Program;
