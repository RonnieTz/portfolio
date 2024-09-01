'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import dynamic from 'next/dynamic';
import description from '@/public/description.png';
import github from '@/public/github.svg';
import codesandbox from '@/public/codesandbox.svg';
import live from '@/public/live.png';
import { Typography } from '@mui/material';

type Props = {
  selectedWindow: string;
  setSelectedWindow: Dispatch<SetStateAction<string>>;
};

const ProjectWindowNavigation = ({
  selectedWindow,
  setSelectedWindow,
}: Props) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        height: '100%',
        width: '130px',
        backgroundColor: 'rgb(236, 233, 216)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
      }}
    >
      <div
        onClick={() => setSelectedWindow('description')}
        style={{
          border:
            selectedWindow === 'description'
              ? '1px solid rgb(122, 152, 175)'
              : 'none',
          backgroundColor:
            selectedWindow === 'description' ? 'white' : 'transparent',
        }}
        className="project-navigation"
      >
        <img
          style={{ height: '50px' }}
          src={description.src}
          alt="description logo"
        />
        <Typography fontSize={'0.9rem'} fontWeight={400}>
          Description
        </Typography>
      </div>

      <div
        className="project-navigation"
        onClick={() => setSelectedWindow('codesandbox')}
        style={{
          border:
            selectedWindow === 'codesandbox'
              ? '1px solid rgb(122, 152, 175)'
              : 'none',
          backgroundColor:
            selectedWindow === 'codesandbox' ? 'white' : 'transparent',
        }}
      >
        <img
          style={{ height: '50px' }}
          src={codesandbox.src}
          alt="description logo"
        />
        <Typography fontSize={'0.9rem'} fontWeight={400}>
          CodeSandbox
        </Typography>
      </div>
      <div
        className="project-navigation"
        onClick={() => setSelectedWindow('live')}
        style={{
          border:
            selectedWindow === 'live' ? '1px solid rgb(122, 152, 175)' : 'none',
          backgroundColor: selectedWindow === 'live' ? 'white' : undefined,
        }}
      >
        <img style={{ height: '50px' }} src={live.src} alt="description logo" />
        <Typography fontSize={'0.9rem'} fontWeight={400}>
          Live
        </Typography>
      </div>
      <a
        href="https://github.com/RonnieTz/chess_game"
        target="_blank"
        className="project-navigation"
        onClick={() => {}}
        style={{
          border:
            selectedWindow === 'github'
              ? '1px solid rgb(122, 152, 175)'
              : 'none',
          backgroundColor:
            selectedWindow === 'github' ? 'white' : 'transparent',
          textDecoration: 'none',
          color: 'black',
          fontSize: '0.9rem',
        }}
      >
        <img
          style={{ height: '50px' }}
          src={github.src}
          alt="description logo"
        />
        Github
      </a>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProjectWindowNavigation), {
  ssr: false,
});
