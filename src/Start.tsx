import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import JSConfetti from 'js-confetti';

function Start() {
  const [count, setCount] = useState(0)
  const [consent, setConsent] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const navigate = useNavigate()
  const [colorText, setColorText] = useState(false)
  const jsConfetti = new JSConfetti()

  useEffect(() => {
    const storedConsent = localStorage.getItem('consent')
    if (storedConsent) {
      setConsent(storedConsent === 'true')
    }
  }, []);

  useEffect(() => {
    if (!consent && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer)
    } else if (!consent && countdown === 0) {
      navigate('/', { replace: true })
    }
  }, [consent, countdown, navigate])

  const handleButtonClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('startClicks', newCount.toString());
    setColorText(true);
    setTimeout(() => {
      setColorText(false);
    }, 1000);
  };

  const nextPage = () => {
    jsConfetti.addConfetti()
    setTimeout(() => {
      navigate('/kemi', { replace: true })
    }, 3000)
  }

  return (
    <main className="wrapper">
      <header className="hero region flow">
      <div className="intro">
  
        </div>
        <h1>Start</h1>
        <p>Nu kör vi!</p>
      </header>
      <section className="region flow">
        <h2>Vad är teknikprogrammet?</h2>
        <p>Teknikprogrammet är ett studieförberedande program, det innehåller både
          teori och praktik.</p>
        <p>Ett exempel på teori från kursen webbutveckling är att lära sig vad en
          <button
            className={colorText ? 'stealth red' : 'stealth'}
            onClick={handleButtonClick}>URL</button> (en address till en annan webbsida) är.
          En {/*<Link className="stealth" to="/kemi">URL</Link>*/}
          <button className="stealth" onClick={() => nextPage()}>URL</button>
          kan du antingen klicka
          dig fram till eller behöva skriva in i webbläsarens address-fält.</p>
        <p>På den här sidan finns en
          <button
            className={colorText ? 'stealth red' : 'stealth'}
            onClick={handleButtonClick}>dold</button> länk till en URL som tar
          dig vidare till nästa sida, kan du hitta den?</p>
        {!consent &&
          <div className="cookies">
            <div className="region flow">
              <h2>Kakorna, du glömde kakorna!</h2>
            </div>
            <img src="./cookies.png" alt="Monster som mumsar kaka." />
          </div>
        }
      </section>
      <div id="modal" className={countdown !== 5 ? 'modal' : 'hidden'}>
        <h2 className="red">{countdown}</h2></div>
    </main>
  );
}

export default Start