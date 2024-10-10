import { Dispatch, SetStateAction } from 'react';

type Props = {
  fontFamily: string;
  setFontFamily: Dispatch<SetStateAction<string>>;
};

const fontFamilies = [
  'Arial',
  'Arial Black',
  'Comic Sans MS',
  'Courier New',
  'Georgia',
  'Impact',
  'Lucida Console',
  'Lucida Sans Unicode',
  'Palatino Linotype',
  'Tahoma',
  'Times New Roman',
  'Trebuchet MS',
  'Verdana',
  'WinXP',
];

const FontFamilyOptions = ({ fontFamily, setFontFamily }: Props) => {
  return (
    <div className="editor-font-family-options">
      <span style={{ position: 'absolute', top: -20 }}>Font:</span>
      <input
        onChange={(e) => {
          setFontFamily(e.target.value);
        }}
        type="text"
        value={fontFamily}
      />
      <div className="editor-font-family-options-list">
        {fontFamilies.map((font) => (
          <div
            style={{
              backgroundColor:
                font === fontFamily ? 'rgb(48, 104, 192)' : undefined,
              color: font === fontFamily ? 'rgb(228, 237, 242)' : undefined,
            }}
            key={font}
            onClick={() => {
              setFontFamily(font);
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
export default FontFamilyOptions;
