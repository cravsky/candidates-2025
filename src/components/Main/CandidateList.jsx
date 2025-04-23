import CandidateCard from './CandidateCard';
import styles from './CandidateList.module.css';

const CandidateList = ({ candidates, sortCriteria }) => {
  const getListTitle = () => {
    switch(sortCriteria) {
      case 'age':
        return 'Kandydaci (wg wieku)';
      case 'controversies':
        return 'Kandydaci (wg kontrowersji)';
      case 'experience':
        return 'Kandydaci (wg doświadczenia)';
      case 'highestPosition':
        return 'Kandydaci (wg najwyższego stanowiska)';
      case 'euStance':
        return 'Kandydaci (wg stosunku do UE)';
      case 'mediaPresence':
        return 'Kandydaci (wg obecności w mediach)';
      case 'russiaStance':
        return 'Kandydaci (wg stosunku do Rosji)';
      case 'ukraineStance':
        return 'Kandydaci (wg stosunku do Ukrainy)';
      case 'usStance':
        return 'Kandydaci (wg stosunku do USA)';
      default:
        return 'Kandydaci (A-Z)';
    }
  };

  return (
    <div className={styles.candidateList}>
      <h2 className={styles.listTitle}>
        {getListTitle()}
      </h2>
      <div className={styles.listContainer}>
        {candidates.map((candidate, index) => (
          <CandidateCard 
            key={index}
            candidate={candidate}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateList;