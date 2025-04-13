import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <img src='/img/logo.png' alt='Marmores' />
      <figcaption>Mármores</figcaption>
    </div>
  );
}
