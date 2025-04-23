import { candidatePhotos } from '../../data/photos';
import styles from './CandidateCard.module.css';

const CandidateCard = ({ candidate }) => {
  return (
    <div className={styles.card}>
      <img 
        src={candidatePhotos[candidate.name]} 
        alt={candidate.name} 
        className={styles.photo} 
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{candidate.name}</h3>
        <p className={styles.info}>{candidate.info1}</p>
        <p className={styles.info}>{candidate.info2}</p>
      </div>
    </div>
  );
};

export default CandidateCard;