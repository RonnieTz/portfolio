import taskbar from '@/public/taskbar.jpg';

const Background = () => {
  return (
    <img
      className="taskbar-background"
      src={taskbar.src}
      alt="taskbar background"
    />
  );
};
export default Background;
