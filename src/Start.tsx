import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'

function Start(props: {
  triggerConfetti: () => void,
  triggerTransition: () => void
}) {
  const navigate = useNavigate()
  const [colorText, setColorText] = useState(false)
  const [count, setCount] = useState(0)
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const clicks = localStorage.getItem('startClicks')
    if (clicks) {
      setCount(parseInt(clicks))
    }
    if (!localStorage.getItem('startTimestamp')) {
      const timestamp = new Date().getTime();
      localStorage.setItem('startTimestamp', timestamp.toString());
    }
  }, []);

  const handleButtonClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('startClicks', newCount.toString());
    setColorText(true);
    setShake(true);
    setTimeout(() => {
      setColorText(false);
      setShake(false);
    }, 1000);
  };

  const nextPage = () => {
    props.triggerTransition()
    props.triggerConfetti()
    setTimeout(() => {
      navigate('/kemi')
    }, 1500)
  }

  return (
    <main className="wrapper">
      <ScrollToTopOnMount />
      <header className="hero region flow">
        <div className="intro">
          Klara, färdiga, gå!
        </div>
        <h1 className='secondary'>Lycka till</h1>
        <p>Tiden går och utmaningen är igång. Slarva inte med läsandet, lösningen finns ofta i texten.</p>
        <p>Varför? För att kunna läsa och förstå instruktioner är otroligt viktigt, både i skolan och i arbetslivet.</p>
      </header>
      <section className={`region flow ${shake ? 'shake' : ''}`}>
        <h2>Vad är <span className="tertiary">teknikprogrammet</span> ?</h2>
        <p>Teknikprogrammet är ett studieförberedande program, det innehåller både teori och praktik. Vi lär oss om saker, men vi skapar dem också. Teknik är konst och skicklighet, men även hantverk. Vi strävar efter att utvecklas med teknik.</p>

        <p>Ett exempel på teori från kursen <span className="primary">Webbutveckling</span> är att lära sig vad en <button className={colorText ? 'stealth red' : 'stealth'} onClick={handleButtonClick}>URL</button> (en adress till en annan webbsida) är. En <button className="stealth" onClick={() => nextPage()}>URL</button> kan du antingen klicka på som en <button className={colorText ? 'stealth red' : 'stealth'} onClick={handleButtonClick}>länk</button> på en webbsida, eller skriva in direkt i webbläsarens adressfält.</p>
        <p>På den här sidan finns en <button className={colorText ? 'stealth red' : 'stealth'} onClick={handleButtonClick}>dold</button> länk till en URL som tar dig vidare till <button className={colorText ? 'stealth red' : 'stealth'} onClick={handleButtonClick}>nästa sida</button>. <strong>Kan du hitta den?</strong></p>
      </section>
    </main>
  );
}

export default Start