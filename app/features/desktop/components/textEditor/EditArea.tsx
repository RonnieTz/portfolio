import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { saveTextFile } from '@/app/redux/editor/editorSlice';
import { useRef } from 'react';

type Props = {
  contentID: string;
};

const EditArea = ({ contentID }: Props) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const { textFiles } = useSelector((state: RootState) => state.editor);
  const file = textFiles.find((file) => file.id === contentID);
  const [value, setValue] = useState(file ? file.content : '');

  return (
    <textarea
      ref={ref}
      style={{
        textWrap: file?.wrap ? 'wrap' : 'nowrap',
        fontSize: file?.fontOptions.fontSize,
        fontFamily: file?.fontOptions.fontFamily,
        fontStyle: file?.fontOptions.fontStyle.toLowerCase().includes('italic')
          ? 'italic'
          : 'normal',
        fontWeight: file?.fontOptions.fontStyle.toLowerCase().includes('bold')
          ? 'bold'
          : 'normal',
      }}
      onChange={(e) => {
        setValue(e.target.value);
        dispatch(saveTextFile({ id: contentID, text: e.target.value }));
      }}
      className="edit-area"
      value={value}
    />
  );
};
export default EditArea;
