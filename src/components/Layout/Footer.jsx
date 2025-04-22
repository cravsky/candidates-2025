import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Kandydaci na Prezydenta RP
        </p>
        <p className={styles.disclaimer}>
          Dane na podstawie informacji z wybory.gov.pl
        </p>
      </div>
    </footer>
  );
};

export default Footer;