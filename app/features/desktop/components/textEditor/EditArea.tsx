import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { saveTextFile } from '@/app/redux/editor/editorSlice';
import { useRef } from 'react';

type Props = {
  content: {
    id: string;
  };
};

const EditArea = ({ content }: Props) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const { textFiles } = useSelector((state: RootState) => state.editor);
  const file = textFiles.find((file) => file.id === content.id);
  const { fontFamily, fontStyle, fontSize } = file?.fontOptions!;
  const [value, setValue] = useState(file ? file.content : '');

  return (
    <textarea
      ref={ref}
      style={{
        textWrap: file?.wrap ? 'wrap' : 'nowrap',
        fontSize,
        fontFamily,
        fontStyle: fontStyle.toLowerCase().includes('italic')
          ? 'italic'
          : 'normal',
        fontWeight: fontStyle.toLowerCase().includes('bold')
          ? 'bold'
          : 'normal',
      }}
      onChange={(e) => {
        setValue(e.target.value);
        dispatch(saveTextFile({ id: content.id, text: e.target.value }));
      }}
      className="edit-area"
      value={value}
    />
  );
};
export default EditArea;
