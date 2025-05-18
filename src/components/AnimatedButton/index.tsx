'use client';

import { motion } from 'framer-motion';
import { ReactNode, ComponentPropsWithoutRef, useState } from 'react';

interface AnimatedButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className?: string;
}

export default function AnimatedButton({
  children,
  className = '',
  ...props
}: AnimatedButtonProps) {
  const [mouseHover, setMouseHover] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMouseHover(true);
    setTimeout(() => setMouseHover(false), 600);
    if (props.onMouseEnter) {
      props.onMouseEnter(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={`relative overflow-hidden isolate text-white font-medium shadow-md transition-colors duration-200 ${className}`}
      {...props}
    >
      {mouseHover && (
        <motion.span
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[#ffdd4566] z-0"
        />
      )}

      {children}
    </button>
  );
}
