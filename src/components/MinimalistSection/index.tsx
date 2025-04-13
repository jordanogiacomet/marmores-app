/**
 * MinimalistSection Component
 * Exibe uma seção minimalista com título, imagem e uma breve descrição.
 * A animação de fade in é disparada uma única vez quando o componente entra na viewport.
 */
import { useRef } from 'react';
import styles from './styles.module.css';
import { useInView } from '../../hooks/useInView';

export function MinimalistSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={`${styles.minimalistSection} ${isVisible ? styles.fadeIn : ''}`}
    >
      <h2 className={styles.minimalistTitle}>PROJETO MINIMALISTA</h2>
      <div className={styles.minimalistImageWrapper}>
        <img
          src='/img/foto-1.webp'
          alt='Projeto Minimalista'
          loading='lazy'
          className={styles.minimalistImage}
        />
      </div>
      <p className={styles.minimalistDescription}>
        A pedido do cliente, o tema do projeto foi minimalista e moderno.
      </p>
    </section>
  );
}
