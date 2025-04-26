import { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CandidateList from './components/Main/CandidateList';
import SortingControls from './components/Sidebar/SortingControls';
import candidatesAge from './data/age.json';
import candidatesAlphabetical from './data/alphabetical.json';
import candidatesEuStance from './data/euStance.json';
import candidatesRussiaStance from './data/russiaStance.json';
import candidatesUkraineStance from './data/ukraineStance.json';
import candidatesUsStance from './data/usaStance.json';
import styles from './App.module.css';

function App() {
  const [sortCriteria, setSortCriteria] = useState('alphabetical');
  
  const getCandidates = (criteria) => {
    switch(criteria) {
      case 'age':
        return candidatesAge;
      case 'euStance':
        return candidatesEuStance;
      case 'russiaStance':
        return candidatesRussiaStance;
      case 'ukraineStance':
        return candidatesUkraineStance;
      case 'usStance':
        return candidatesUsStance;
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