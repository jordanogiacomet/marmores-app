/**
 * MultiPhotosSection Component
 * Exibe uma seção com duas linhas:
 * - A linha superior apresenta duas imagens.
 * - A linha inferior apresenta uma imagem e um bloco de texto.
 * A animação fadeIn ocorre quando o componente entra na viewport.
 */
import { useRef } from 'react';
import styles from './styles.module.css';
import { useInView } from '../../hooks/useInView';

export function MultiPhotosSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={`${styles.photosSection} ${isVisible ? styles.fadeIn : ''}`}
    >
      {/* Linha Superior: duas imagens */}
      <div className={styles.rowTop}>
        <img
          className={styles.imageSmallOne}
          src='/img/foto-4.webp'
          alt='Foto 4'
          loading='lazy'
        />
        <img
          className={styles.imageSmallTwo}
          src='/img/foto-5.webp'
          alt='Foto 5'
          loading='lazy'
        />
      </div>
      {/* Linha Inferior: imagem e bloco de texto */}
      <div className={styles.rowBottom}>
        <img
          className={styles.imageSmallThree}
          src='/img/foto-6.webp'
          alt='Foto 6'
          loading='lazy'
        />
        <div className={styles.textArea}>
          <h2 className={styles.sectionTitle}>PROJETO CONTEMPORÂNEO</h2>
          <p className={styles.sectionText}>
            Bancadas e pias em mármore e granito com acabamento impecável.
          </p>
        </div>
      </div>
    </section>
  );
}
