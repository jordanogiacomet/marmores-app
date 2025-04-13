/**
 * BudgetSection
 * Exibe um botão de call-to-action (variação "big") e, abaixo, uma imagem.
 */
import styles from './styles.module.css';
import { Button } from '../Button';

export function BudgetSection() {
  return (
    <section className={styles.budgetSection}>
      <div className={styles.internalContainer}>
        <Button variant='big'>Solicite Um Orçamento</Button>
        <div className={styles.imageContainer}>
          <img
            className={styles.budgetImage}
            src='/img/foto-9.jpg'
            alt='Foto Nine'
          />
        </div>
      </div>
    </section>
  );
}
