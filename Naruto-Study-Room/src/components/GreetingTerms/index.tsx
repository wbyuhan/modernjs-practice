import React, { useEffect, useRef } from 'react';
import styles from './styles/index.module.less';

// const duration = 0.8;
const delay = 0.3;

function GreetingTerms(props) {
  const ref = useRef(null);
  const { text } = props;
  if (!text) return null;
  useEffect(() => {
    if (text && ref.current) {
      const revealText = ref.current;
      revealText.textContent = '';
      const letters = text.split('');
      const middle = letters.filter((e) => e !== ' ').length / 2;
      letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
        revealText.append(span);
      });
    }

    return () => {};
  }, [text, ref.current]);

  return (
    <div className={styles.reveal} ref={ref}>
      {text}
    </div>
  );
}

export default GreetingTerms;
