import { Logo } from '../Logo';
import { Heading } from '../Heading';
import styles from './styles.module.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Logo />
      <Heading variant='dark'>Mármores Pio X</Heading>
    </div>
  );
}
