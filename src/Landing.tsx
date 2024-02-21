import './Landing.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'

function Landing() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(true);

  const handleCheckboxClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setChecked(!checked);
    localStorage.setItem('landingClicks', newCount.toString());
  };

  return (
    <main className="wrapper">
            <ScrollToTopOnMount />
      <header className="hero region flow">
        <div className="intro">
          <input type="checkbox" name="check" id="check" checked={checked} onChange={handleCheckboxClick} />
          <p>Check du kan använda 
            en <span className="material-symbols-outlined primary">
              qr_code
          </span>.
          </p>
        </div>
        <h1><span className="secondary">Hej</span> och välkommen</h1>
        <p>Kul att du har valt att besöka oss på <a href="https://ntigymnasiet.se/umea/" target="_blank">NTI Gymnasiet Umeå</a> idag.</p>
      </header>
      <section className="region flow">
        <h2>Vad är detta för <span className="primary">något</span> då?</h2>
        <p>Det här är en webbsida skapad för att visa lite vad vi gör på teknikprogrammet.</p>
        <p>Sidan består av ett antal utmaningar kopplade till olika ämnen på programmet. Du behöver klara utmaningen för att komma vidare mot målet.</p>
        <div className="center-bounce region">
          <span className="material-symbols-outlined tertiary">
            arrow_downward
          </span>
        </div>
        <div className="center">
        <Link className="button" to="/start">Börja här</Link>
        </div>
      </section>
      <footer className="region">
        <p>Tack till <span className="secondary">Te23</span> för test av den här sidan.</p>
      </footer>

    </main>
  )
}

export default Landing
