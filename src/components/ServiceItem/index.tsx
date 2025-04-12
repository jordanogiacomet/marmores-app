// src/components/ServiceItem/ServiceItem.tsx
import styles from './styles.module.css';

type ServiceItemProps = {
  icon: string;
  title: string;
  description: string;
};

export function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div className={styles.serviceItem}>
      <img src={icon} alt={title} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
