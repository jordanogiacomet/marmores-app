/**
 * ServiceItem Component
 * Exibe um item de serviço com um ícone, título e descrição.
 * Utiliza imagens ou ícones e texto para representar o serviço prestado.
 */
import styles from './styles.module.css';

type ServiceItemProps = {
  icon: string;
  title: string;
  description: string;
};

export function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div className={styles.serviceItem}>
      <img src={icon} alt={title} className={styles.serviceIcon} />
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  );
}
