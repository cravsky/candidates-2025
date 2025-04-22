import { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CandidateList from './components/Main/CandidateList';
import SortingControls from './components/Sidebar/SortingControls';
import candidatesAge from './data/candidates-age.json';
import candidatesAlphabetical from './data/candidates-alphabetical.json';
import styles from './App.module.css';

function App() {
  const [sortCriteria, setSortCriteria] = useState('alphabetical');
  const candidates = sortCriteria === 'alphabetical' ? candidatesAlphabetical : candidatesAge;

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