import { useRef } from 'react';
import styles from './styles.module.css';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';
import { useInView } from '../../hooks/useInView';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(sectionRef); // Retorna true quando entra na viewport

  const whatsappUrl = 'https://wa.me/+5554991778843';
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.heroSection} ${isVisible ? styles.fadeIn : ''}`}
    >
      <Heading variant='light'>
        Mármores Pio X – Sofisticação e Qualidade em cada detalhe!
      </Heading>
      <Paragraph>
        Transformamos seu espaço com pedras naturais exclusivas. Qualidade,
        acabamento perfeito e entrega rápida!
      </Paragraph>
      <Button onClick={handleWhatsAppClick}>
        Solicite um orçamento agora!
      </Button>
    </section>
  );
}
