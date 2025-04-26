import styles from './SortingControls.module.css';

const SortingControls = ({ sortCriteria, onSortingChange }) => {
  const handleSortChange = (e) => {
    onSortingChange(e.target.value);
  };

  const getInfoText = () => {
    switch(sortCriteria) {
      case 'age':
        return 'Wyświetlanie kandydatów według wieku wraz z przynależnością partyjną.';
      case 'experience':
        return 'Wyświetlanie kandydatów według lat doświadczenia w administracji.';
      case 'highestPosition':
        return 'Wyświetlanie kandydatów według najwyższego zajmowanego stanowiska.';
      case 'euStance':
        return 'Wyświetlanie kandydatów według ich stosunku do Unii Europejskiej.';
      case 'russiaStance':
        return 'Wyświetlanie kandydatów według ich stosunku do Rosji.';
      case 'ukraineStance':
        return 'Wyświetlanie kandydatów według ich stosunku do Ukrainy.';
      case 'usStance':
        return 'Wyświetlanie kandydatów według ich stosunku do USA.';
      case 'climateEnergy':
        return 'Wyświetlanie kandydatów według ich stosunku do polityki klimatycznej i energetycznej.';
      case 'economy':
        return 'Wyświetlanie kandydatów według ich poglądów gospodarczych.';
      case 'security':
        return 'Wyświetlanie kandydatów według ich podejścia do bezpieczeństwa państwa.';
      case 'socialIdeology':
        return 'Wyświetlanie kandydatów według ich poglądów społecznych i ideologicznych.';
      default:
        return 'Wyświetlanie kandydatów w kolejności alfabetycznej wraz z ich stanowiskami.';
    }
  };

  const renderRadioOption = (id, value, label) => (
    <div className={styles.option}>
      <input
        type="radio"
        id={id}
        name="sortCriteria"
        value={value}
        checked={sortCriteria === value}
        onChange={handleSortChange}
        className={styles.radioInput}
      />
      <label htmlFor={id} className={styles.radioLabel}>
        <span className={styles.radioControl}></span>
        <span className={styles.radioText}>{label}</span>
      </label>
    </div>
  );

  return (
    <div className={styles.controls}>
      <h2 className={styles.title}>Wybierz kategorię</h2>
      <div className={styles.optionsContainer}>
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Podstawowe</h3>
          {renderRadioOption('alphabetical', 'alphabetical', 'Przynależność partyjna')}
          {renderRadioOption('age', 'age', 'Wiek')}
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Doświadczenie</h3>
          {renderRadioOption('highestPosition', 'highestPosition', 'Najwyższe stanowisko')}
          {renderRadioOption('experience', 'experience', 'Doświadczenie w administracji')}
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Polityka wewnętrzna</h3>
          {renderRadioOption('climateEnergy', 'climateEnergy', 'Klimat i energia')}
          {renderRadioOption('economy', 'economy', 'Gospodarka')}
          {renderRadioOption('security', 'security', 'Bezpieczeństwo')}
          {renderRadioOption('socialIdeology', 'socialIdeology', 'Ideologia społeczna')}
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Polityka zagraniczna</h3>
          {renderRadioOption('euStance', 'euStance', 'Stosunek do UE')}
          {renderRadioOption('usStance', 'usStance', 'Stosunek do USA')}
          {renderRadioOption('russiaStance', 'russiaStance', 'Stosunek do Rosji')}
          {renderRadioOption('ukraineStance', 'ukraineStance', 'Stosunek do Ukrainy')}
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