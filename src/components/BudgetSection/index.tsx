import styles from './styles.module.css';
import { Button } from '../Button';

/**
 * BudgetSection Component
 * Exibe um botão de call-to-action "Solicite Um Orçamento" que, ao ser clicado,
 * abre o WhatsApp da empresa em nova aba.
 */
export function BudgetSection() {
  // URL do WhatsApp da empresa. Altere conforme necessário.
  const whatsappUrl = 'https://wa.me/+5554991778843';

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.budgetSection}>
      <div className={styles.internalContainer}>
        {/* Botão com a variação "big" que abre o WhatsApp */}
        <Button variant='big' onClick={handleWhatsAppClick}>
          Solicite Um Orçamento
        </Button>
        <div className={styles.imageContainer}>
          <img
            className={styles.photoNine}
            src='/img/foto-9.jpg'
            alt='Foto Nine'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
}
