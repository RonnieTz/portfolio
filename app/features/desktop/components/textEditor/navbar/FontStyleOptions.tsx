import { Dispatch, SetStateAction } from 'react';

type Props = {
  fontStyle: string;
  setFontStyle: Dispatch<SetStateAction<string>>;
};

const fontStyles = ['Normal', 'Italic', 'Bold', 'Bold Italic'];

const FontStyleOptions = ({ fontStyle, setFontStyle }: Props) => {
  return (
    <div
      style={{ left: '35%', width: '25%' }}
      className="editor-font-family-options"
    >
      <span style={{ position: 'absolute', top: -20 }}>Font style:</span>
      <input
        onChange={(e) => {
          setFontStyle(e.target.value);
        }}
        type="text"
        value={fontStyle}
      />
      <div className="editor-font-family-options-list">
        {fontStyles.map((font) => (
          <div
            style={{
              backgroundColor:
                font === fontStyle ? 'rgb(48, 104, 192)' : undefined,
              color: font === fontStyle ? 'rgb(228, 237, 242)' : undefined,
            }}
            key={font}
            onClick={() => {
              setFontStyle(font);
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
export default FontStyleOptions;
