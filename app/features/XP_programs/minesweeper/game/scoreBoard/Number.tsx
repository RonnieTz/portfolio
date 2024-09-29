import Image from 'next/image';
import zero from '@/public/zero.jpg';
import one from '@/public/one.jpg';
import two from '@/public/two.jpg';
import three from '@/public/three.jpg';
import four from '@/public/four.jpg';
import five from '@/public/five.jpg';
import six from '@/public/six.jpg';
import seven from '@/public/seven.jpg';
import eight from '@/public/eight.jpg';
import nine from '@/public/nine.jpg';

type Props = { num: number };

const Number = ({ num }: Props) => {
  return (
    <div className="ms-number">
      <Image
        style={{ width: '100%', height: '100%' }}
        src={
          num === 0
            ? zero
            : num === 1
            ? one
            : num === 2
            ? two
            : num === 3
            ? three
            : num === 4
            ? four
            : num === 5
            ? five
            : num === 6
            ? six
            : num === 7
            ? seven
            : num === 8
            ? eight
            : num === 9
            ? nine
            : zero
        }
        alt="number"
      />
    </div>
  );
};
export default Number;
