import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top - 8,
        left: rect.left + rect.width / 2,
      });
    }
  }, [isVisible]);

  const tooltipBg = theme === 'dark' ? '#374151' : '#ffffff';
  const arrowBorderColor = theme === 'dark' ? '#374151' : '#ffffff';

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-block"
      >
        {children}
      </div>
      {isVisible && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translate(-50%, calc(-100% - 8px))',
          }}
        >
          <div
            className="rounded-lg shadow-xl p-3 max-w-xs animate-fadeIn relative"
            style={{
              backgroundColor: tooltipBg,
              color: theme === 'dark' ? '#ffffff' : '#1f2937'
            }}
          >
            {content}
            {/* Arrow */}
            <div className="absolute left-1/2 top-full transform -translate-x-1/2 -mt-px">
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: `8px solid ${arrowBorderColor}`
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
