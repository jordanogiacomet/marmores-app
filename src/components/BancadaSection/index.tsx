// src/components/BancadaSection/BancadaSection.tsx
import styles from './styles.module.css';

export function BancadaSection() {
  return (
    <section className={styles.bancadaSection}>
      {/* Coluna Esquerda: Título + Descrição + Imagem Menor */}
      <div className={styles.leftColumn}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>PROJETO DE BANCADA</h2>
          <p className={styles.description}>
            Bancadas e pias em mármore e granito com acabamento impecável.
          </p>
        </div>
        <div className={styles.smallImageWrapper}>
          <img
            src='/img/foto-2.jpg'
            alt='Detalhe de Bancada'
            className={styles.smallImage}
          />
        </div>
      </div>

      {/* Coluna Direita: Imagem Maior */}
      <div className={styles.rightColumn}>
        <img
          src='/img/foto-3.webp'
          alt='Cozinha minimalista com bancada'
          className={styles.bigImage}
        />
      </div>
    </section>
  );
}
