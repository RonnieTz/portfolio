import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/store';
import { useEffect } from 'react';
import { fetchHighScores } from '@/app/redux/minesweeper/fetchHighScores';

const Scores = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mineswweeper = useSelector((state: RootState) => state.minesweeper);
  const { highScores } = mineswweeper;
  const easy = highScores.scores.find((score) => score.level === 'begginer');
  const intermediate = highScores.scores.find(
    (score) => score.level === 'intermediate'
  );
  const expert = highScores.scores.find((score) => score.level === 'expert');

  useEffect(() => {
    dispatch(fetchHighScores());
  }, [dispatch]);

  return (
    <div className="ms-scores">
      <table className="ms-scores-table">
        <thead>
          <tr>
            <th align="left" colSpan={3}>
              Begginer
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st:</td>
            <td>{`${easy?.scores[0].time} seconds`}</td>
            <td>{easy?.scores[0].name}</td>
          </tr>
          <tr>
            <td>2nd:</td>
            <td>{`${easy?.scores[1].time} seconds`}</td>
            <td>{easy?.scores[1].name}</td>
          </tr>
          <tr>
            <td>3rd:</td>
            <td>{`${easy?.scores[2].time} seconds`}</td>
            <td>{easy?.scores[2].name}</td>
          </tr>
        </tbody>
      </table>
      <table className="ms-scores-table">
        <thead>
          <tr>
            <th align="left" colSpan={3}>
              Intermediate
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st:</td>
            <td>{`${intermediate?.scores[0].time} seconds`}</td>
            <td>{intermediate?.scores[0].name}</td>
          </tr>
          <tr>
            <td>2nd:</td>
            <td>{`${intermediate?.scores[1].time} seconds`}</td>
            <td>{intermediate?.scores[1].name}</td>
          </tr>
          <tr>
            <td>3rd:</td>
            <td>{`${intermediate?.scores[2].time} seconds`}</td>
            <td>{intermediate?.scores[2].name}</td>
          </tr>
        </tbody>
      </table>
      <table className="ms-scores-table">
        <thead>
          <tr>
            <th align="left" colSpan={3}>
              Expert
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st:</td>
            <td>{`${expert?.scores[0].time} seconds`}</td>
            <td>{expert?.scores[0].name}</td>
          </tr>
          <tr>
            <td>2nd:</td>
            <td>{`${expert?.scores[1].time} seconds`}</td>
            <td>{expert?.scores[1].name}</td>
          </tr>
          <tr>
            <td>3rd:</td>
            <td>{`${expert?.scores[2].time} seconds`}</td>
            <td>{expert?.scores[2].name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Scores;
