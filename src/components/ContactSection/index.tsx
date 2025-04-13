/**
 * ContactSection
 * Exibe os dados de contato (endereço e telefone) com ícones do Lucide.
 */
import styles from './styles.module.css';
import { MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactItem}>
        <MapPin className={styles.icon} size={24} />
        <div className={styles.textWrapper}>
          <span className={styles.label}>ENDEREÇO</span>
          <span className={styles.info}>
            Rua Balduíno D&apos;Arrigo 424, Pio X, Caxias do Sul 95034290
          </span>
        </div>
      </div>
      <div className={styles.contactItem}>
        <Phone className={styles.icon} size={24} />
        <div className={styles.textWrapper}>
          <span className={styles.label}>TELEFONE</span>
          <span className={styles.info}>(54) 991778843</span>
        </div>
      </div>
    </section>
  );
}
