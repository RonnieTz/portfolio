import { Typography, Box } from '@mui/material';
import HTML from '../../technologyIcons/HTML';
import CSS from '../../technologyIcons/CSS';
import Typescript from '../../technologyIcons/Typescript';
import Javascript from '../../technologyIcons/Javascript';

const PortfolioWindowDescription = () => {
  return (
    <div
      style={{
        height: '100%',
        width: 'calc(100% - 130px)',
        backgroundColor: 'rgba(96, 132, 216, 255)',
        color: 'rgba(248, 252, 248, 255)',
        textShadow: '0 0 2px rgba(142, 168, 226, 255)',
        fontWeight: 400,
        position: 'absolute',
        right: 0,
        boxSizing: 'border-box',
        padding: '50px 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        overflow: 'auto',
      }}
    >
      <Typography
        textAlign={'center'}
        variant="h1"
        marginBottom={6}
        fontSize={'1.8rem'}
        fontWeight={500}
      >
        Chess Game
      </Typography>
      <Box width={'80%'} margin={'0 auto'} minWidth={'300px'} marginBottom={6}>
        <Typography
          textAlign={'center'}
          marginBottom={1}
          variant="h2"
          fontSize={'1.5rem'}
          fontWeight={400}
        >
          Introduction
        </Typography>
        <Typography lineHeight={1.4} fontSize={'0.9rem'}>
          The Chess Board Web App is a simple, elegant chess application built
          using JavaScript. Designed for two players on the same screen, it
          highlights all legal moves and enforces standard chess rules. The app
          features move history navigation, allowing players to review and
          analyze their game with back and next buttons, and a board rotation
          option for an optimal playing experience.
        </Typography>
      </Box>
      <Box marginBottom={6}>
        <Typography
          textAlign={'center'}
          marginBottom={1}
          variant="h2"
          fontSize={'1.5rem'}
          fontWeight={400}
        >
          Technologies Used
        </Typography>
        <div
          style={{
            width: '100%',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
          }}
        >
          <Javascript />
          <Typescript />
          <HTML />
          <CSS />
        </div>
      </Box>
      <Box width={'80%'} margin={'0 auto'} minWidth={'300px'} marginBottom={5}>
        <Typography
          textAlign={'center'}
          marginBottom={1}
          variant="h2"
          fontSize={'1.5rem'}
          fontWeight={400}
        >
          Challenges and Lessons
        </Typography>
        <Typography lineHeight={1.4} fontSize={'0.9rem'}>
          One of the biggest challenges in developing the Chess Board Web App
          was designing the algorithm to predict legal moves, as chess involves
          nearly infinite position combinations. Handling unique piece
          movements, like castling and en passant, while ensuring the app only
          allows moves that don't put the king in check, was particularly
          complex. This required simulating moves and checking for threats to
          the king, adding significant difficulty. Through this process, I
          improved my understanding of algorithm design, JavaScript, and
          TypeScript, learning to balance efficiency with accuracy in a
          rules-based system.
        </Typography>
      </Box>
      <Box width={'80%'} margin={'0 auto'} minWidth={'300px'}>
        <Typography
          textAlign={'center'}
          marginBottom={1}
          variant="h2"
          fontSize={'1.5rem'}
          fontWeight={400}
        >
          How to use
        </Typography>
        <Typography lineHeight={1.4} fontSize={'0.9rem'}>
          To start playing visit the live demo link. The chess board will
          appear, ready for a two-player game on the same screen. Players take
          turns by clicking on their pieces; the app will highlight all legal
          moves for the selected piece. Move a piece by clicking on the desired
          destination square. Use the back and next buttons to navigate through
          the move history, allowing you to review and analyze previous moves.
          To view the board from the other player's perspective, click the
          rotation button to rotate the board.
        </Typography>
      </Box>
    </div>
  );
};
export default PortfolioWindowDescription;
