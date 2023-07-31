import React, { useState } from 'react';

interface BellowProps {
  title: string;
  content: string;
}

export function Bellow({ title, content }: BellowProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 border-b-2 border-b-[#C3FFD0] grid gap-4">
      {/* Title */}
      <button
        type="button"
        className="flex items-start justify-between text-left gap-4 "
        onClick={handleClick}
      >
        <div className="flex-1">{title}</div>
        <div className={`${isOpen ? 'rotate-45' : ''} w-6 `}></div>
      </button>

      {/* Content */}

      <div className={`${isOpen ? 'contentt show' : 'contentt'} 	`}>
        {content}
      </div>
    </div>
  );
}

interface AccordionProps {
  content: {
    id: number;
    title: string;
    content: string;
  }[];
}

export default function Accordion({ content }: AccordionProps) {
  return (
    <div>
      {content?.map((d) => (
        <Bellow key={d.id} title={d.title} content={d.content} />
      ))}
    </div>
  );
}
