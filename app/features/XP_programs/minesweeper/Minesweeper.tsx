import Container from './game/Container';
import Navbar from './nav/Navbar';
import './styles.css';
const Minesweeper = () => {
  return (
    <div className="minesweeper-container">
      <Navbar />
      <Container />
    </div>
  );
};
export default Minesweeper;
