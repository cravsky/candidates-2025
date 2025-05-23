import { useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import Modal from './Modal';
import styles from './Header.module.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const version = "1.0.2";

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Kandydaci na Prezydenta RP</h1>
        <p className={styles.subtitle}>Wybory 2025</p>
        <button 
          className={styles.infoButton}
          onClick={() => setIsModalOpen(true)}
          aria-label="Informacje o aplikacji"
        >
          <FiInfo size={24} />
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>O aplikacji</h2>
          <div className={styles.modalText}>
            <p className={styles.modalVersion}>
              Kandydaci na Prezydenta Polski 2025
              <span className={styles.versionTag}>v. 1.0.0</span>
            </p>
            <p>
              Aplikacja umożliwia zapoznanie się z kandydatami na Prezydenta Polski 
              w wyborach w 2025 roku.
            </p>
            <p>
              Dane zostały zebrane i przetworzone przy wsparciu sztucznej inteligencji.
            </p>
            <p className={styles.modalDisclaimer}>
              Za wszelkie możliwe nieścisłości i błędy serdecznie przepraszam.
              <span className={styles.signatureContainer}>
                <span className={styles.signature}>~Krzysztof Krawczyński</span>
                <a 
                  href="https://www.linkedin.com/in/cravsky/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.linkedInLink}
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={20} />
                </a>
              </span>
            </p>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;