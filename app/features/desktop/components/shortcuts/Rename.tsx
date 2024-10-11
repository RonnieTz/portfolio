import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { renameLink } from '@/app/redux/app/appSlice';

type Props = { placeholder: string; linkID: string };

const Rename = ({ placeholder, linkID }: Props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(placeholder);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.select();
    ref.current?.focus();
  }, []);
  return (
    <input
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          dispatch(renameLink({ linkID, newName: value }));
        }
      }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      ref={ref}
      type="text"
      className="project-link-rename"
    />
  );
};
export default Rename;
