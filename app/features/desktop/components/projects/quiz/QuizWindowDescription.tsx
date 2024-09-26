import { Box, Typography } from '@mui/material';
import Javascript from '../../technologyIcons/Javascript';
import Typescript from '../../technologyIcons/Typescript';
import HTML from '../../technologyIcons/HTML';
import CSS from '../../technologyIcons/CSS';
import React from '../../technologyIcons/React';

const QuizWindowDescription = () => {
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
        Quiz Game
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
          The Quiz Game is an interactive app built with React and TypeScript.
          Users can customize their quiz by selecting categories, difficulties
          (easy, medium, hard), and the number of questions. After starting the
          quiz, players answer questions one at a time, with a "Next" button
          appearing after each selection. Once all questions are completed,
          users can view their results in a two-tab window: one showing the
          total correct answers, and the other displaying a breakdown of all
          their responses.
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
          <React />
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
          A key challenge in developing the Quiz Game was integrating an API to
          dynamically fetch questions based on the user's selected categories,
          difficulty levels, and number of questions. Ensuring smooth
          interaction between the API and the app, while handling various user
          inputs, required careful management of asynchronous data fetching in
          React with TypeScript. Another challenge was maintaining efficient
          state management to track user progress and answers, ensuring seamless
          transitions between questions. This project enhanced my skills in
          working with APIs, managing complex state in React, and creating a
          smooth, responsive user experience.
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
          To start using the Quiz Game, open the app and select your preferred
          categories, difficulty levels (easy, medium, hard), and the number of
          questions. You can choose as many categories and difficulty levels as
          you want. Once your selections are made, click the Start button to
          begin the quiz. For each question, select an answer from the provided
          options, and a Next button will appear to move on to the next
          question. After completing all the questions, click See Results to
          view your performance. The results page will display two tabs: one
          showing your total correct answers, and the other listing all your
          selected answers.
        </Typography>
      </Box>
    </div>
  );
};

export default QuizWindowDescription;
