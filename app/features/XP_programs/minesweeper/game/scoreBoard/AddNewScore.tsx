import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/store';
import { ms_reset, showHighScores } from '@/app/redux/appSlice';
import { getScores, addNewScore } from '@/app/utilities/database/getScores';
import { useState } from 'react';

const AddNewScore = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { mineswweeper } = useSelector((state: RootState) => state.app);
  const { highScores, timer, mode } = mineswweeper;
  const { scores } = highScores;
  const currentMode = scores.find((score) => score.level === mode);
  const newScores = [
    ...currentMode?.scores!,
    { name: 'Anonymous', time: timer },
  ].sort((a, b) => a.time - b.time);
  const position =
    newScores.findIndex(
      (score) => score.time === timer && score.name === 'Anonymous'
    ) + 1;
  return (
    <div className="ms-new-score">
      <div>
        {position <= 3 &&
          `You have the ${
            position === 2 ? `2nd ` : position === 3 ? `3rd ` : ''
          } fastest time for the begginer level.`}
        {position > 3 && `You did not make the top 3 fastest times.`}
      </div>
      {position <= 3 && (
        <>
          <div>Please enter your name.</div>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
          />
        </>
      )}
      <button
        onClick={async () => {
          dispatch(ms_reset());
          dispatch(showHighScores(true));
          await addNewScore({
            level: mode,
            time: timer,
            name: name || 'Anonymous',
          });
        }}
      >
        OK
      </button>
    </div>
  );
};
export default AddNewScore;
