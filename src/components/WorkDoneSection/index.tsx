import styles from './styles.module.css';

export function WorkDoneSection() {
  return (
    <section className={styles.photosSection}>
      {/* Linha Superior: duas fotos em linha */}
      <div className={styles.columnLeft}>
        <img
          className={styles.photoSeven}
          src='/img/foto-7.webp'
          alt='Foto 7'
          loading='lazy'
        />
      </div>

      <div className={styles.columnRight}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>TRABALHO ENTREGUE</h2>
          <p className={styles.description}>
            Elegância e qualidade para seu banheiro!
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.photoEight}
            src='/img/foto-8.webp'
            alt='Foto 8'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
}
