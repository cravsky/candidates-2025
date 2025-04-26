import { candidatePhotos } from '../../data/photos';
import styles from './CandidateCard.module.css';

const CandidateCard = ({ candidate }) => {
  return (
    <div className={`${styles.card} ${candidate.noInfo ? styles.noInfo : ''}`}>
      <img 
        src={candidatePhotos[candidate.name]} 
        alt={candidate.name} 
        className={styles.photo} 
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{candidate.name}</h3>
        <p className={styles.info}>{candidate.info1}</p>
        <p className={styles.info}>{candidate.info2}</p>
        {!candidate.noInfo && candidate.sources && candidate.sources.length > 0 && (
          <div className={styles.sources}>
            <div className={styles.sourcesHeader}>
              <span className={styles.sourcesTitle}>Źródła:</span>
              <div className={styles.sourceLinks}>
                {candidate.sources.map((source, index) => (
                  <a 
                    key={index}
                    href={source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.sourceLink}
                  >
                    {index + 1}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;