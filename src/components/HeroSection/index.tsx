// src/components/HeroSection/HeroSection.tsx
import styles from './styles.module.css';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <Heading variant='light'>
        Mármores Pio X – Sofisticação e Qualidade em cada detalhe!
      </Heading>
      <Paragraph>
        Transformamos seu espaço com pedras naturais exclusivas. Qualidade,
        acabamento perfeito e entrega rápida!
      </Paragraph>
      <Button onClick={() => console.log('Solicitado orçamento!')}>
        Solicite um orçamento agora!
      </Button>
    </section>
  );
}
