import styles from './SortingControls.module.css';

const SortingControls = ({ sortCriteria, onSortingChange }) => {
  const handleSortChange = (e) => {
    onSortingChange(e.target.value);
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
      </div>
      
      <div className={styles.infoBox}>
        <h3 className={styles.infoTitle}>Informacje</h3>
        <p className={styles.infoText}>
          {sortCriteria === 'alphabetical'
            ? 'Wyświetlanie kandydatów w kolejności alfabetycznej wraz z ich stanowiskami.'
            : 'Wyświetlanie kandydatów według wieku wraz z przynależnością partyjną.'}
        </p>
      </div>
    </div>
  );
};

export default SortingControls;