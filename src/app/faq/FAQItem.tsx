'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    if (open) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0px';
    }
  }, [open]);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-gray-800 font-medium text-lg focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-${question}`}
      >
        {question}
        <span className="text-xl">{open ? '-' : '+'}</span>
      </button>
      <div
        ref={contentRef}
        id={`faq-${question}`}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
        style={{ maxHeight: '0px' }}
      >
        <p className="mt-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
