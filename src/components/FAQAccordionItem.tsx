import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionItemProps {
  number: string;
  question: string;
  answer: string;
}

export function FAQAccordionItem({ number, question, answer }: FAQAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`border-b border-rm-border transition-colors duration-300 ${isOpen ? 'bg-rm-surface-el rounded-lg -mx-2 px-2' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 py-5 text-left group cursor-pointer"
      >
        <span className={`text-xs font-medium uppercase tracking-[0.5px] w-6 flex-shrink-0 transition-colors duration-150 ${isOpen ? 'text-rm-coral' : 'text-rm-coral'}`}>
          {number}
        </span>
        <span className={`flex-1 text-base font-medium transition-colors duration-150 ${isOpen ? 'text-rm-coral' : 'text-white group-hover:text-rm-coral'}`}>
          {question}
        </span>
        <ChevronDown
          size={16}
          className={`text-rm-text-muted flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: height }}
      >
        <div ref={contentRef} className="pb-5 pl-10 pr-8">
          <p className="text-rm-text-secondary text-[15px] leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
