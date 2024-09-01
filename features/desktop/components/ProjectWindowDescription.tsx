import { Box, Typography } from '@mui/material';
import javascript from '@/public/javascript.svg';
import Javascript from './technologyIcons/Javascript';
import Typescript from './technologyIcons/Typescript';
import HTML from './technologyIcons/HTML';
import CSS from './technologyIcons/CSS';

const ProjectWindowDescription = () => {
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
      <Box marginBottom={6}>
        <Typography
          textAlign={'center'}
          marginBottom={1}
          variant="h2"
          fontSize={'1.5rem'}
          fontWeight={400}
        >
          Introduction
        </Typography>
        <Typography lineHeight={1.4} fontSize={'1rem'}>
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
      <Box>
        <Typography
          textAlign={'center'}
          marginBottom={1}
          variant="h2"
          fontSize={'1.5rem'}
          fontWeight={400}
        >
          Challenges and Lessons
        </Typography>
        <Typography lineHeight={1.4} fontSize={'1rem'}>
          <Typography marginBottom={'5px'}>
            One of the most challenging aspects of developing the Chess Board
            Web App was creating the algorithm to predict the legal moves for
            each chess piece. Chess is a highly complex game with nearly
            infinite possible position combinations, making it difficult to
            design an efficient and accurate algorithm. Implementing logic that
            could handle the unique movement rules for each piece—while also
            considering board boundaries, potential captures, and special moves
            like castling—required careful thought and meticulous testing.
          </Typography>
          <Typography marginBottom={'5px'}>
            Another significant challenge was ensuring that the algorithm only
            accepts moves that do not leave the king in check. This added a
            layer of complexity, as I had to simulate each possible move and
            then evaluate whether it would expose the king to capture. The
            recursive nature of this problem made it particularly tricky, as it
            required a balance between performance and correctness.
          </Typography>
          <Typography>
            Through this process, I gained a deeper understanding of algorithm
            design, problem-solving, and the importance of edge case handling in
            game development. The project not only improved my proficiency in
            JavaScript, TypeScript, and CSS but also taught me valuable lessons
            in patience, perseverance, and the intricacies of creating a robust,
            rule-based system.
          </Typography>
        </Typography>
      </Box>
    </div>
  );
};

export default ProjectWindowDescription;
