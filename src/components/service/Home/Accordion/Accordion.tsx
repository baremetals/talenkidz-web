import { useState } from 'react';
import AccordionItem from './AccordionItem';
import styles from 'styles/Accordion.module.css';
import { TFaq } from 'src/types';

function Accordion({ items }: { items: Array<TFaq> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <ul className={styles.accordion}>
      {items.map((item, idx) => (
        <AccordionItem
          key={item.id}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </ul>
  );
}

export default Accordion;
