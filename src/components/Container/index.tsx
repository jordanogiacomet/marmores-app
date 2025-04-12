// Container.tsx
import React from 'react';
import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.content}>
        <section>{children}</section>
      </div>
    </div>
  );
}
