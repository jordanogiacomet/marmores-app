/**
 * Button Component
 * Exibe um botão com duas variações:
 * - "default" para botões normais;
 * - "big" para botões de call-to-action em seções como BudgetSection.
 */
import React, { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'big';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${variant === 'big' ? styles.buttonBig : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
