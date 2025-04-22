import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Kandydaci na Prezydenta RP</h1>
        <p className={styles.subtitle}>Wybory 2025</p>
      </div>
    </header>
  );
};

export default Header;