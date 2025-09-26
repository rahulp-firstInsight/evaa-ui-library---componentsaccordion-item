import React, { useState } from 'react';
import './Accordion.scss';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  flush?: boolean;
  className?: string;
  defaultOpenItems?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  flush = false,
  className = '',
  defaultOpenItems = []
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(defaultOpenItems)
  );

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(itemId);
    }
    
    setOpenItems(newOpenItems);
  };

  return (
    <div className={`accordion ${flush ? 'accordion--flush' : ''} ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id);
        const isDisabled = item.disabled || false;
        
        return (
          <div
            key={item.id}
            className={`accordion__item ${isOpen ? 'accordion__item--active' : ''} ${isDisabled ? 'accordion__item--disabled' : ''}`}
          >
            <div
              className={`accordion__header ${isOpen ? 'accordion__header--active' : ''}`}
              onClick={() => !isDisabled && toggleItem(item.id)}
              role="button"
              tabIndex={isDisabled ? -1 : 0}
              onKeyDown={(e) => {
                if (!isDisabled && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  toggleItem(item.id);
                }
              }}
            >
              <span className={`accordion__title ${isDisabled ? 'accordion__title--disabled' : ''}`}>
                {item.title}
              </span>
              <div className={`accordion__icon ${isOpen ? 'accordion__icon--rotated' : ''}`}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            {isOpen && (
              <div className="accordion__content">
                <div className="accordion__body">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
