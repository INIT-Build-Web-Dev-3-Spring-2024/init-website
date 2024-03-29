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

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const rect = (e.target as HTMLDivElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (hoverElement) {
        hoverElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(110,110,110,0.5), rgba(255,255,255,0))`;
      }
    };

    const handleMouseLeave = () => {
      if (hoverElement) {
        hoverElement.style.background = 'transparent';
      }
    };

    if (hoverElement) {
      hoverElement.addEventListener('mousemove', handleMouseMove);
      hoverElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (hoverElement) {
        hoverElement.removeEventListener('mousemove', handleMouseMove);
        hoverElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={hoverRef} className={`flex w-fit ${className}`}>
      {children}
    </div>
  );
};

export default HoverEffect;

