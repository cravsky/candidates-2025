import { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CandidateList from './components/Main/CandidateList';
import SortingControls from './components/Sidebar/SortingControls';
import candidatesAge from './data/age.json';
import candidatesAlphabetical from './data/alphabetical.json';
import candidatesControversies from './data/controversies.json';
import candidatesExperience from './data/experience.json';
import candidatesHighestPosition from './data/highestPosition.json';
import styles from './App.module.css';

function App() {
  const [sortCriteria, setSortCriteria] = useState('alphabetical');
  
  const getCandidates = (criteria) => {
    switch(criteria) {
      case 'age':
        return candidatesAge;
      case 'controversies':
        return candidatesControversies;
      case 'experience':
        return candidatesExperience;
      case 'highestPosition':
        return candidatesHighestPosition;
      default:
        return candidatesAlphabetical;
    }
  };

  const candidates = getCandidates(sortCriteria);

  const handleSortingChange = (criteria) => {
    setSortCriteria(criteria);
  };

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <CandidateList 
            candidates={candidates} 
            sortCriteria={sortCriteria} 
          />
        </main>
        <aside className={styles.sidebar}>
          <SortingControls 
            sortCriteria={sortCriteria} 
            onSortingChange={handleSortingChange} 
          />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;