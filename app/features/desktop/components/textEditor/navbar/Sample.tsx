import { useDispatch } from 'react-redux';

type Props = {
  fontStyle: string;
  fontFamily: string;
  fontSize: number;
};

const Sample = ({ fontStyle, fontFamily, fontSize }: Props) => {
  return (
    <div className="editor-font-options-sample">
      <span
        style={{
          position: 'absolute',
          top: '-18px',
          color: 'rgb(7, 73, 208)',
          fontFamily: 'Arial',
          fontSize: '12px',
          textShadow: '0px 0px 1px rgb(107, 173, 208)',
        }}
      >
        Sample
      </span>
      <div
        style={{
          fontSize,
          fontFamily,
          fontStyle: fontStyle.toLowerCase().includes('italic')
            ? 'italic'
            : 'normal',
          fontWeight: fontStyle.toLowerCase().includes('bold')
            ? 'bold'
            : 'normal',
          overflow: 'hidden',
        }}
      >
        AaBbYyZz
      </div>
    </div>
  );
};
export default Sample;
