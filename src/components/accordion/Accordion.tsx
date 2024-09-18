import { useState, useRef } from "react";

type AccordionProp = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProp) {
  // ** State
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleSidenavSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-1 border-blue-200 rounded-md">
      <button
        onClick={toggleSidenavSubMenu}
        className="flex items-center w-full px-3 leading-10 border-blue-200 rounded-md group focus:outline-none focus:ring-2 focus:ring-primary-200"
      >
        <span className="font-semibold">{title}</span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
}
