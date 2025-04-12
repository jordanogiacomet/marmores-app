// Heading.tsx
import React from 'react';
import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
  variant?: 'dark' | 'light'; // Define as opções de cor
};

export function Heading({ children, variant = 'dark' }: HeadingProps) {
  // Monta a classe de variação
  const variantClass =
    variant === 'light' ? styles.headingLight : styles.headingDark;

  return <h1 className={`${styles.heading} ${variantClass}`}>{children}</h1>;
}
