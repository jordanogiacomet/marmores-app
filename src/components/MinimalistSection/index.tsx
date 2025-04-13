/**
 * MinimalistSection Component
 * Exibe uma seção minimalista com título, imagem e uma breve descrição.
 */
import styles from './styles.module.css';

export function MinimalistSection() {
  return (
    <section className={styles.minimalistSection}>
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
