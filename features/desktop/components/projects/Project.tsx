import './styles.css';

type Props = {
  children: React.ReactNode;
};

const Project = ({ children }: Props) => {
  return <div className="project">{children}</div>;
};
export default Project;
