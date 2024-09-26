import ChessMenuItem from './projectMenuItems/ChessMenuItem';
import PortfolioMenuItem from './projectMenuItems/PortfolioMenuItem';
import QuizMenuItem from './projectMenuItems/QuizMenuItem';
type Props = {
  timeoutID: NodeJS.Timeout | null;
  setTimeoutID: React.Dispatch<React.SetStateAction<NodeJS.Timeout | null>>;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const AllProjectsMenu = ({ timeoutID, setTimeoutID, setOpenMenu }: Props) => {
  return (
    <div
      className="all-projects-menu"
      onMouseOver={(e) => {
        if (timeoutID) {
          clearTimeout(timeoutID);
        }
      }}
      onMouseLeave={() => {
        const timeout = setTimeout(() => {
          setOpenMenu(false);
        }, 600);
        setTimeoutID(timeout);
      }}
      style={{
        width: '57%',
        height: '68%',
        border: '2px solid rgb(85, 161, 255',
        position: 'absolute',
        zIndex: 100,
        bottom: '10%',
        left: '38%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          height: 'calc(100% + 3.5px)',
          width: '7px',
          backgroundColor: 'rgb(48, 127, 229',
          position: 'absolute',
          left: '-4px',
          top: '-1.5px',
          zIndex: -20,
        }}
      ></div>
      <PortfolioMenuItem setOpenMenu={setOpenMenu} />
      <ChessMenuItem setOpenMenu={setOpenMenu} />
      <QuizMenuItem setOpenMenu={setOpenMenu} />
    </div>
  );
};

export default AllProjectsMenu;
