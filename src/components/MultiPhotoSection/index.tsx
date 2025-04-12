// src/components/MultiPhotosSection/MultiPhotosSection.tsx
import styles from './styles.module.css';

export function MultiPhotosSection() {
  return (
    <section className={styles.photosSection}>
      {/* Coluna Esquerda: Imagens */}
      <div className={styles.leftColumn}>
        <div className={styles.photosWrapper}>
          <div className={styles.imageContainer}>
            <img
              src='/img/foto-4.webp'
              alt='Detalhe 1'
              className={styles.smallImage}
            />
          </div>
          <div className={styles.imageContainer}>
            <img
              src='/img/foto-5.webp'
              alt='Detalhe 2'
              className={styles.smallImage}
            />
          </div>
          <div className={styles.imageContainer}>
            <img
              src='/img/foto-6.webp'
              alt='Detalhe 3'
              className={styles.smallImage}
            />
          </div>
        </div>
      </div>

      {/* Coluna Direita: Título + Descrição */}
      <div className={styles.rightColumn}>
        <h2 className={styles.title}>Projeto Contemporâneo</h2>
        <p className={styles.description}>
          O tema foi contemporâneo com detalhes em tons escuros.
        </p>
      </div>
    </section>
  );
}
