import { useEffect, useState } from 'react';
import styles from '../styles/textLoader.module.css';

interface LoaderProps {
  texts: string[];
  typingSpeed?: number;
  pauseTime?: number;
}

const Loader: React.FC<LoaderProps> = ({ texts, typingSpeed = 150, pauseTime = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (subText.length < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setSubText(texts[textIndex].substring(0, subText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (subText.length > 0) {
        timeout = setTimeout(() => {
          setSubText(texts[textIndex].substring(0, subText.length - 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [subText, isTyping, textIndex, texts, typingSpeed, pauseTime]);

  return (
    <div className={styles.loader}>
      <span className={`${styles.loaderText} ${styles.blink}`}>{subText}</span>
    </div>
  );
};

export default Loader;