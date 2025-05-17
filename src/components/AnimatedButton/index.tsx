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
  const [clicked, setClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600); // Reseta após a animação (~600ms)

    // Se tiver onClick no props, chama ele também
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden isolate text-white font-medium shadow-md transition-colors duration-200 ${className}`}
      {...props}
    >
      {clicked && (
        <motion.span
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[#ff73005b] z-0"
        />
      )}

      {/* Conteúdo do botão */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
