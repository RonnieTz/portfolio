import { Dispatch, SetStateAction } from 'react';

type Props = {
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
};

const fontSises = [
  8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,
];

const FontSize = ({ fontSize, setFontSize }: Props) => {
  return (
    <div
      style={{ left: '63%', width: '15%' }}
      className="editor-font-family-options"
    >
      <span style={{ position: 'absolute', top: -20 }}>Size:</span>
      <input
        onChange={(e) => {
          setFontSize(e.target.valueAsNumber);
        }}
        type="text"
        value={fontSize}
      />
      <div className="editor-font-family-options-list">
        {fontSises.map((font) => (
          <div
            style={{
              backgroundColor:
                font === fontSize ? 'rgb(48, 104, 192)' : undefined,
              color: font === fontSize ? 'rgb(228, 237, 242)' : undefined,
            }}
            key={font}
            onClick={() => {
              setFontSize(font);
            }}
            className="editor-font-family-options-item"
          >
            {font}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FontSize;
