import FontFamilyOptions from './FontFamilyOptions';
import { useState } from 'react';
import FontStyleOptions from './FontStyleOptions';
import FontSize from './FontSize';
import Confirm from './Confirm';
import Sample from './Sample';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const FontOptions = ({ contentID }: { contentID: string }) => {
  const { textFiles } = useSelector((state: RootState) => state.editor);
  const file = textFiles.find((file) => file.id === contentID);
  const fontOptions = file?.fontOptions;
  const [fontFamilyOption, setFontFamilyOption] = useState(
    fontOptions?.fontFamily || 'Arial'
  );
  const [fontStyleOption, setFontStyleOption] = useState(
    fontOptions?.fontStyle || 'Normal'
  );
  const [fontSizeOption, setFontSizeOption] = useState(
    fontOptions?.fontSize || 12
  );
  return (
    <div className="editor-font-options">
      <FontFamilyOptions
        fontFamily={fontFamilyOption}
        setFontFamily={setFontFamilyOption}
      />
      <FontStyleOptions
        fontStyle={fontStyleOption}
        setFontStyle={setFontStyleOption}
      />
      <FontSize fontSize={fontSizeOption} setFontSize={setFontSizeOption} />
      <Confirm
        fontFamily={fontFamilyOption}
        fontSize={fontSizeOption}
        fontStyle={fontStyleOption}
        contentID={contentID}
      />
      <Sample
        fontFamily={fontFamilyOption}
        fontSize={fontSizeOption}
        fontStyle={fontStyleOption}
      />
    </div>
  );
};
export default FontOptions;
