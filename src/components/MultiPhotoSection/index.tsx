// src/components/MultiPhotosSection/MultiPhotosSection.tsx
import styles from './styles.module.css';

export function MultiPhotosSection() {
  return (
    <section className={styles.photosSection}>
      {/* Linha Superior: duas fotos em linha */}
      <div className={styles.rowTop}>
        <img
          className={styles.photoFour}
          src='/img/foto-4.webp'
          alt='Foto 4'
          loading='lazy'
        />
        <img
          className={styles.photoFive}
          src='/img/foto-5.webp'
          alt='Foto 5'
          loading='lazy'
        />
      </div>

      {/* Linha Inferior: foto e área de texto */}
      <div className={styles.bottomRow}>
        <img
          className={styles.photoSix}
          src='/img/foto-6.webp'
          alt='Foto 6'
          loading='lazy'
        />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>PROJETO CONTEMPORÂNEO</h2>
          <p className={styles.description}>
            Bancadas e pias em mármore e granito com acabamento impecável.
          </p>
        </div>
      </div>
    </section>
  );
}
