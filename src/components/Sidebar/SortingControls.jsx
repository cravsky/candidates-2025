import styles from './SortingControls.module.css';

const SortingControls = ({ sortCriteria, onSortingChange }) => {
  const handleSortChange = (e) => {
    onSortingChange(e.target.value);
  };

  const getInfoText = () => {
    switch(sortCriteria) {
      case 'age':
        return 'Wyświetlanie kandydatów według wieku wraz z przynależnością partyjną.';
      case 'controversies':
        return 'Wyświetlanie kandydatów według liczby kontrowersji i skandali.';
      case 'experience':
        return 'Wyświetlanie kandydatów według lat doświadczenia w administracji.';
      case 'highestPosition':
        return 'Wyświetlanie kandydatów według najwyższego zajmowanego stanowiska.';
      default:
        return 'Wyświetlanie kandydatów w kolejności alfabetycznej wraz z ich stanowiskami.';
    }
  };

  return (
    <div className={styles.controls}>
      <h2 className={styles.title}>Sortowanie</h2>
      <div className={styles.optionsContainer}>
        <div className={styles.option}>
          <input
            type="radio"
            id="alphabetical"
            name="sortCriteria"
            value="alphabetical"
            checked={sortCriteria === 'alphabetical'}
            onChange={handleSortChange}
            className={styles.radioInput}
          />
          <label htmlFor="alphabetical" className={styles.radioLabel}>
            <span className={styles.radioControl}></span>
            <span className={styles.radioText}>Alfabetycznie (A-Z)</span>
          </label>
        </div>
        
        <div className={styles.option}>
          <input
            type="radio"
            id="age"
            name="sortCriteria"
            value="age"
            checked={sortCriteria === 'age'}
            onChange={handleSortChange}
            className={styles.radioInput}
          />
          <label htmlFor="age" className={styles.radioLabel}>
            <span className={styles.radioControl}></span>
            <span className={styles.radioText}>Według wieku</span>
          </label>
        </div>

        <div className={styles.option}>
          <input
            type="radio"
            id="controversies"
            name="sortCriteria"
            value="controversies"
            checked={sortCriteria === 'controversies'}
            onChange={handleSortChange}
            className={styles.radioInput}
          />
          <label htmlFor="controversies" className={styles.radioLabel}>
            <span className={styles.radioControl}></span>
            <span className={styles.radioText}>Według kontrowersji</span>
          </label>
        </div>

        <div className={styles.option}>
          <input
            type="radio"
            id="experience"
            name="sortCriteria"
            value="experience"
            checked={sortCriteria === 'experience'}
            onChange={handleSortChange}
            className={styles.radioInput}
          />
          <label htmlFor="experience" className={styles.radioLabel}>
            <span className={styles.radioControl}></span>
            <span className={styles.radioText}>Według doświadczenia</span>
          </label>
        </div>

        <div className={styles.option}>
          <input
            type="radio"
            id="highestPosition"
            name="sortCriteria"
            value="highestPosition"
            checked={sortCriteria === 'highestPosition'}
            onChange={handleSortChange}
            className={styles.radioInput}
          />
          <label htmlFor="highestPosition" className={styles.radioLabel}>
            <span className={styles.radioControl}></span>
            <span className={styles.radioText}>Według stanowiska</span>
          </label>
        </div>
      </div>
      
      <div className={styles.infoBox}>
        <h3 className={styles.infoTitle}>Informacje</h3>
        <p className={styles.infoText}>{getInfoText()}</p>
      </div>
    </div>
  );
};

export default SortingControls;