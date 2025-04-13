/**
 * ServicesList Component
 * Exibe uma lista de serviços em um layout de grid responsivo.
 * Os dados podem ser populados via CMS ou JSON.
 */
import styles from './styles.module.css';
import { ServiceItem } from '../ServiceItem';

const servicesData = [
  {
    icon: '/img/icons/mesa.webp',
    title: 'Bancadas de Cozinha e Banheiro',
    description:
      'Mármore e granito sob medida para transformar seu espaço com requinte e resistência.',
  },
  {
    icon: '/img/icons/ferramenta.webp',
    title: 'Pisos e Revestimentos',
    description:
      'Durabilidade e sofisticação para qualquer ambiente. Trabalhamos com pedras naturais de alto padrão.',
  },
  {
    icon: '/img/icons/martelo.webp',
    title: 'Soleiras e Peitoris',
    description:
      'O acabamento perfeito para portas e janelas com pedras resistentes e elegantes.',
  },
  {
    icon: '/img/icons/bg-mesa.png',
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
