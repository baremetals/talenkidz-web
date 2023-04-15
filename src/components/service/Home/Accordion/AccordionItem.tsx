import Markdown from 'markdown-to-jsx';
import { useEffect, useRef, useState } from 'react';
import { getRefValue } from 'src/lib/hooks';
import { TFaq } from 'src/types';
import styles from 'styles/AccordionItem.module.css';

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: TFaq;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className={`${styles.accordionItem} ${isOpen ? 'active' : ''}`}>
      <h2 className={styles.accordionItemTitle}>
        <button className={styles.accordionItemBtn} onClick={btnOnClick}>
          {data.attributes.question}
        </button>
      </h2>
      <div className={styles.accordionItemContainer} style={{ height }}>
        <div ref={contentRef} className={styles.accordionItemContent}>
          <Markdown>{data.attributes.answer}</Markdown>
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;