/**
 * AboutSection
 * Exibe a seção "Sobre Nós" utilizando uma imagem de fundo e um bloco de texto.
 * O componente utiliza elementos semânticos para SEO e é responsivo.
 */
import styles from './styles.module.css';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

export function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.imageContainer} />
      <div className={styles.textContainer}>
        <Heading variant='light'>SOBRE NÓS</Heading>
        <Paragraph>
          Na Mármores Pio X, trabalhamos há 35 anos oferecendo mármores e
          granitos de alta qualidade. Nosso compromisso é entregar beleza,
          sofisticação e durabilidade para seu projeto. Seja para cozinhas,
          banheiros, pisos ou revestimentos, garantimos um acabamento impecável
          e atendimento personalizado.
        </Paragraph>
      </div>
    </section>
  );
}
