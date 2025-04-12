// src/components/ServicesList/ServicesList.tsx
import styles from './styles.module.css';
import { ServiceItem } from '../ServiceItem';

// Array de dados (poderia vir de um CMS ou JSON)
const servicesData = [
  {
    icon: 'public/img/icons/mesa.webp',
    title: 'Bancadas de Cozinha e Banheiro',
    description:
      'Mármore e granito sob medida para transformar seu espaço com requinte e resistência.',
  },
  {
    icon: 'public/img/icons/ferramenta.webp',
    title: 'Pisos e Revestimentos',
    description:
      'Durabilidade e sofisticação para qualquer ambiente. Trabalhamos com pedras naturais de alto padrão.',
  },
  {
    icon: 'public/img/icons/martelo.webp',
    title: 'Soleiras e Peitoris',
    description:
      'O acabamento perfeito para portas e janelas com pedras resistentes e elegantes.',
  },
  {
    icon: 'public/img/icons/bg-mesa.png',
    title: 'Mesas, Lareiras e Painéis em Pedra',
    description:
      'Peças exclusivas que agregam estilo e sofisticação ao seu ambiente.',
  },
];

export function ServicesList() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        {servicesData.map(service => (
          <ServiceItem
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
