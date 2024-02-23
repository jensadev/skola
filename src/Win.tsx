import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'

function Win(props: {
  triggerConfetti: (options?: object) => void,
  triggerTransition: () => void
}) {
  const location = useLocation();
  const [name, setName] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get('namn');
    if (name && name.length > 2 && /^[a-zA-Z]+$/.test(name)) {
      props.triggerConfetti({ emojis: ['🦄'], confettiRadius: 100, confettiNumber: 30, emojiSize: 100 })
      setName(name);

      if (!localStorage.getItem('endTimestamp')) {
        const timestamp = new Date().getTime();
        localStorage.setItem('endTimestamp', timestamp.toString());
      }
    }

    const intervalId = setInterval(() => {
      props.triggerConfetti({ emojis: ['🦄'], confettiRadius: 100, confettiNumber: 30 })
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [location, props]);

  const scoreCard = {
    name,
    startTime: localStorage.getItem('startTimestamp') || '0',
    endTime: localStorage.getItem('endTimestamp') || '0',
    completionTime: (parseInt(localStorage.getItem('endTimestamp') || '0') - parseInt(localStorage.getItem('startTimestamp') || '0')) / 1000,
    start: {
      guesses: parseInt(localStorage.getItem('startClicks') || '0'),
      timestamp: localStorage.getItem('startTimestamp') || '0'
    },
    kemi: {
      guesses: parseInt(localStorage.getItem('kemiClicks') || '0'),
      timestamp: localStorage.getItem('kemiTimestamp') || '0'
    },
    matte: {
      guesses: parseInt(localStorage.getItem('matteClicks') || '0'),
      timestamp: localStorage.getItem('matteTimestamp') || '0'
    },
    programmering: {
      guesses: parseInt(localStorage.getItem('programmeringClicks') || '0'),
      timestamp: localStorage.getItem('programmeringTimestamp') || '0'
    },
    fysik: {
      guesses: parseInt(localStorage.getItem('fysikClicks') || '0'),
      timestamp: localStorage.getItem('fysikTimestamp') || '0'
    },
    webb: {
      guesses: parseInt(localStorage.getItem('webbClicks') || '0'),
      timestamp: localStorage.getItem('webbTimestamp') || '0'
    }
  }


  return (
    <main className="wrapper">
      <ScrollToTopOnMount />
      <header className="hero region flow">
        <div className="intro">
          Du gjorde det!
        </div>
        <h1>Grattis <span className="primary name">{scoreCard.name}</span></h1>
        <p>På riktigt, bra jobbat, du förtjänar enhörningar.</p>
      </header>
      <section className="region flow">
        <h2 className='tertiary'>Så hur gick det för dig?</h2>
        <ul className='scorecard'>
          <li>Du började: {new Date(parseInt(scoreCard.startTime)).toLocaleString()}</li>
          <li>och gick i mål: {new Date(parseInt(scoreCard.endTime)).toLocaleString()}</li>
          <li>Det tog dig: {Math.round(scoreCard.completionTime)} sekunder eller {Math.round(scoreCard.completionTime / 60)} minuter</li>
          <li className={scoreCard.start.timestamp ? 'green' : 'red'}>Antal gissningar på start: {scoreCard.start.guesses}</li>
          <li className={scoreCard.kemi.timestamp ? 'green' : 'red'}>Antal gissningar på kemi: {scoreCard.kemi.guesses}</li>
          <li className={scoreCard.matte.timestamp ? 'green' : 'red'}>Antal gissningar på matte: {scoreCard.matte.guesses}</li>
          <li className={scoreCard.programmering.timestamp ? 'green' : 'red'}>Antal gissningar på programmering: {scoreCard.programmering.guesses}</li>
          <li className={scoreCard.fysik.timestamp ? 'green' : 'red'}>Antal gissningar på fysik: {scoreCard.fysik.guesses}</li>
          <li className={scoreCard.webb.timestamp ? 'green' : 'red'}>Antal gissningar på webb: {scoreCard.webb.guesses}</li>
        </ul>
      </section>
    </main>
  )
}

export default Win