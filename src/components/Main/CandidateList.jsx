import CandidateCard from './CandidateCard';
import styles from './CandidateList.module.css';

const CandidateList = ({ candidates, sortCriteria }) => {
  return (
    <div className={styles.candidateList}>
      <h2 className={styles.listTitle}>
        {sortCriteria === 'alphabetical' 
          ? 'Kandydaci (A-Z)' 
          : 'Kandydaci (wg wieku)'}
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