// src/components/MinimalistSection/MinimalistSection.tsx
import styles from './styles.module.css';

export function MinimalistSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>PROJETO MINIMALISTA</h2>
      <div className={styles.imageWrapper}>
        <img
          src='/img/foto-1.webp'
          alt='Projeto Minimalista'
          className={styles.image}
        />
      </div>
      <p className={styles.description}>
        A pedido do cliente, o tema do projeto foi minimalista e moderno.
      </p>
    </section>
  );
}
