"use client";
import React, { useRef, useEffect, MouseEvent } from 'react';

interface HoverEffectProps {
  children: React.ReactNode;
  className?: string;
}

const HoverEffect = ({ children, className }: HoverEffectProps) => {
  const hoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hoverElement = hoverRef.current;

    // bug fix: use the currentTarget property of the event object instead of target. 
    // The currentTarget property always refers to the element that the event listener is attached to, 
    // not the child element where the event happened.
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (hoverElement) {
          hoverElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(110,110,110,0.5), rgba(255,255,255,0) 75%)`;
        }
      };

    const handleMouseLeave = () => {
        if (hoverElement) {
            hoverElement.style.background = 'transparent';
        }
    };

    if (hoverElement) {
            hoverElement.addEventListener('mouseenter', handleMouseMove as unknown as EventListener);
            hoverElement.addEventListener('mouseleave', handleMouseLeave as EventListener);
    }

    return () => {
        if (hoverElement) {
            hoverElement.removeEventListener('mousemove', handleMouseMove as unknown as EventListener);
            hoverElement.removeEventListener('mouseleave', handleMouseLeave as EventListener);
        }
    };
  }, []);

  return (
    <div ref={hoverRef} className={`${className}`}>
      {children}
    </div>
  );
};

export default HoverEffect;