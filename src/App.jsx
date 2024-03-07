import grafika from './assets/grafika.png';
import styles from './App.module.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Nav />
      <div class='h-full' className={styles.hatter}>
        <div class='pt-80 pb-24'>
          <h1 class='flex justify-center font-bold text-5xl text-white'>Üdvözöljük a CollaboraCode oldalán!</h1>
        </div>
        <div>
          <img src={grafika} alt="grafika" className={styles.grafika} />
        </div>
        <div class='pt-20 pb-80'>
          <p class='flex justify-center text-2xl font-medium text-white'>Vigye a programozást a következő szintre!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
