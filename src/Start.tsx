import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Start() {
  const [consent, setConsent] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const storedConsent = localStorage.getItem('consent');
    if (storedConsent) {
      setConsent(storedConsent === 'true');
    }
  }, []);

  useEffect(() => {
    if (!consent && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!consent && countdown === 0) {
      navigate('/', { replace: true })
    }
  }, [consent, countdown, navigate]);

  return (
    <main className="wrapper">
      <header className="hero region flow">
        <h1>Start</h1>
        <p>Nu kör vi!</p>
      </header>
      <section className="region flow">
        <h2>Vad är teknikprogrammet?</h2>
        <p>Teknikprogrammet är ett studieförberedande program, det innehåller både teori och praktik.</p>
        <p>Ett exempel på teori från kursen webbutveckling är att lära sig vad en URL (en address till en annan webbsida) är. En <Link className="stealth" to="/kemi">URL</Link> kan du antingen klicka dig fram till eller behöva skriva in i webbläsarens address-fält.</p>
        <p>På den här sidan finns en dold länk till en URL som tar dig vidare till nästa sida, kan du hitta den?</p>
        {!consent &&
          <div className="cookies">
            <div className="region flow">
              <h2>Kakorna, du glömde kakorna!</h2>
              <p>Förlåt... {countdown}</p>
            </div>
            <img src="./cookies.png" alt="Monster som mumsar kaka." />
          </div>
        }
      </section>
    </main>
  );
}

export default Start