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

      const endTimestamp = Number(localStorage.getItem('endTimestamp'));
      const startTimestamp = Number(localStorage.getItem('startTimestamp'));
      
      if (!endTimestamp || endTimestamp < startTimestamp) {
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
    },
    landingClicks: parseInt(localStorage.getItem('landingClicks') || '0')
  }


  return (
    <main className="wrapper">
      <ScrollToTopOnMount />
      <header className="hero region flow">
        <div className="intro">
          <p>Du är en stjärna ⭐</p>
        </div>
        <h1 className='bounce'>Grattis <span className="primary name">{scoreCard.name}</span>!</h1>
        <p>På riktigt, bra jobbat, du förtjänar enhörningar 🦄</p>
      </header>
      <section className="region flow">
        <h2 className='tertiary'>Så hur gick det för dig?</h2>
        <ul className='scorecard flow'>
          {+scoreCard.start.timestamp > 0 && +scoreCard.kemi.timestamp > 0 && +scoreCard.matte.timestamp > 0 && +scoreCard.programmering.timestamp > 0 && +scoreCard.fysik.timestamp > 0 && +scoreCard.webb.timestamp > 0 ?
            <>
              <li>Du började <span className="primary">{new Intl.DateTimeFormat('sv-SE', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(parseInt(scoreCard.startTime)))}</span> och gick i mål <span className="secondary">{new Intl.DateTimeFormat('sv-SE', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(parseInt(scoreCard.endTime)))}</span>.</li>
              <li>Det tog dig <span className="tertiary">{Math.round(scoreCard.completionTime)}</span> sekunder eller <span className="tertiary">{Math.round(scoreCard.completionTime / 60)}</span> minuter.</li>
              <li>Det tog dig <span className="green">{scoreCard.start.guesses}</span> försök att hitta den dolda länken.</li>
              <li>Du gissade <span className="green">{scoreCard.kemi.guesses}</span> gånger på olika förbränningar.</li>
              <li>När det kommer till matten så tog det dig <span className="green">{scoreCard.matte.guesses}</span> gissningar innan du prickade rätt.</li>
              <li>Det där med iteration kan vara svårt, men det tog dig <span className="green">{scoreCard.programmering.guesses}</span> gissningar att komma på det.</li>
              <li>De flesta reser inte dubbla sträckan bara för nöjes skull, som ekot. Du behövde <span className="green">{scoreCard.fysik.guesses}</span> försök för att studsa rätt.</li>
              <li >Den här sista var riktigt klurig, du behövde <span className="green">{scoreCard.webb.guesses - 1}</span> försök för att skriva en korrekt query parameter.</li>
              <li>Du klickade också checkboxen på startsidan <span className="green">{scoreCard.landingClicks}</span> gånger {scoreCard.landingClicks > 0 ? ', oklart varför' : ''}.</li>
            </> : <li className='red'>Det verkar som att du inte har klarat av alla momenten, fiskigt.</li>}
        </ul>
        <p>Tack för idag, om du vill veta mer om vår skola så hittar du information på vår hemsida, <a href="https://ntigymnasiet.se/umea/" target='_blank'>NTI Gymnasiet Umeå</a>.</p>
      </section>
    </main>
  )
}

export default Win