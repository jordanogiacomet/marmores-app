// src/components/Paragraph/Paragraph.tsx
import React from 'react';
import styles from './styles.module.css';

type ParagraphProps = {
  children: React.ReactNode;
};

export function Paragraph({ children }: ParagraphProps) {
  return <p className={styles.paragraph}>{children}</p>;
}
