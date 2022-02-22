import { useEffect, useState, useRef } from 'react';

export default function useProgressBar(percentage) {
  const [number, setNumber] = useState('30');

  useEffect(() => {
    let i = 0;
    function animatedProgressBar() {
      if (i == 0) {
        i = 1;
        const width = 10;
        const id = setInterval(() => {
          if (width >= percentage) {
            clearInterval(id);
            i = 0;
          } else {
            setNumber(width++);
          }
        }, 100);
      }
    }

    animatedProgressBar();
  }, []);

  return number;
}
