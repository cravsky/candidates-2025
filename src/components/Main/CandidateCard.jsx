import styles from './CandidateCard.module.css';

const CandidateCard = ({ candidate, sortCriteria }) => {
  return (
    <div className={styles.card}>
      <img 
        src={candidate.photo} 
        alt={candidate.name} 
        className={styles.photo} 
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{candidate.name}</h3>
        {sortCriteria === 'alphabetical' ? (
          <>
            <p className={styles.info}>Partia: {candidate.partia}</p>
            <p className={styles.info}>Stanowisko: {candidate.stanowisko}</p>
          </>
        ) : (
          <>
            <p className={styles.info}>Wiek: {candidate.age} lat</p>
            <p className={styles.info}>Partia: {candidate.partia}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;