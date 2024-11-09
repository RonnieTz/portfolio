const Intro = ({ title }: { title: string }) => {
  return (
    <div className="move-item-window-intro">{`Select the place where you want to move '${title}'. Then click the Move button.`}</div>
  );
};
export default Intro;
