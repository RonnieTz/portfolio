import { Typography } from '@mui/material';
import typescript from '@/public/typescript.svg';
import Image from 'next/image';

const Typescript = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        marginTop: '10px',
      }}
    >
      {/* <img height={'60%'} src={typescript.src} alt="" /> */}
      <Image
        priority={true}
        style={{ height: '60%', width: 'auto' }}
        src={typescript}
        alt=""
      />
      <Typography
        sx={{ ':hover': { cursor: 'default' } }}
        textAlign={'center'}
        fontSize={'0.7rem'}
        fontWeight={200}
      >
        TypeScript
      </Typography>
    </div>
  );
};

export default Typescript;
