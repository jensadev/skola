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

      const timestamp = new Date().getTime();
      localStorage.setItem('endTimestamp', timestamp.toString());
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
    start: {
      guesses: localStorage.getItem('startClicks') || '0',
      timestamp: localStorage.getItem('startTimestamp') || '0'
    },
    kemi: {
      guesses: localStorage.getItem('kemiQuestion') || '0',
      timestamp: localStorage.getItem('kemiTimestamp') || '0'
    },
    matte: {
      guesses: localStorage.getItem('matteQuestion') || '0',
      timestamp: localStorage.getItem('matteTimestamp') || '0'
    },
    programmering: {
      guesses: localStorage.getItem('programmeringQuestion') || '0',
      timestamp: localStorage.getItem('programmeringTimestamp') || '0'
    },
    fysik: {
      guesses: localStorage.getItem('fysikQuestion') || '0',
      timestamp: localStorage.getItem('fysikTimestamp') || '0'
    },
    webb: {
      guesses: localStorage.getItem('webbQuestion') || '0',
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
        <h1>Grattis <span className="primary">{ scoreCard.name }</span></h1>
        <p>På riktigt, bra jobbat</p>
      </header>
      <section className="region flow">
        <h2>Så hur gick det för dig?</h2>

        
      </section>
    </main>
  )
}

export default Win