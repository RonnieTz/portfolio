import React from 'react';

type Props = { link: string; show: boolean };

const ProjectWindowExternal = ({ link, show }: Props) => {
  return (
    <iframe
      src={link}
      style={{
        width: 'calc(100% - 130px)',
        height: '100%',
        border: 0,
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        zIndex: show ? 10 : -10,
      }}
      title="RonnieTz/quiz/main"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default ProjectWindowExternal;
