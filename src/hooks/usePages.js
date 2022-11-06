import { useEffect } from 'react';

const usePages = ({ goodId, itemLength, nextGood, setNextGood, previousGood, setPreviousGood }) => {
  useEffect(() => {
    if (goodId === itemLength) {
      setNextGood({
        ...nextGood,
        visibility: 'hidden',
        pointerEvent: 'none',
      });
      setPreviousGood({
        ...previousGood,
        visibility: 'visible',
        pointerEvent: '',
      });
    } else if (goodId === 1) {
      setPreviousGood({
        ...previousGood,
        visibility: 'hidden',
        pointerEvent: 'none',
      });
      setNextGood({
        ...nextGood,
        visibility: 'visible',
        pointerEvent: '',
      });
    } else {
      setPreviousGood({
        ...previousGood,
        visibility: 'visible',
        pointerEvent: '',
      });
      setNextGood({
        ...nextGood,
        visibility: 'visible',
        pointerEvent: '',
      });
    }
  }, [goodId]);
};

export default usePages;
