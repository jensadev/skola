
import './Landing.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(true);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('consent');
    if (storedConsent) {
      setConsent(storedConsent === 'true');
    }
  }, []);

  const handleCheckboxClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setChecked(!checked);
    localStorage.setItem('clicks', newCount.toString());
  };
  const handleButtonClick = () => {
    setConsent(true);
    localStorage.setItem('consent', 'true');
  };

  return (
    <main className="wrapper">
      <header className="hero region flow">
        <div className="intro">
          <input type="checkbox" name="check" id="check" checked={checked} onChange={handleCheckboxClick} />
          <p>Check du kan använda en <span className="material-symbols-outlined">
            qr_code
          </span></p>
        </div>
        <h1>Hej och välkommen!</h1>
        <p>Kul att du har valt att besöka oss på <a href="https://ntigymnasiet.se/umea/" target="_blank">NTI Gymnasiet Umeå</a> idag.</p>
      </header>
      <section className="region flow">
        <h2>Vad är det här?</h2>
        <p>Det här är en webbsida skapad för att du ska få testa lite vad vi gör på teknikprogrammet.</p>
        <p>Sidan består av ett antal utmaningar där du behöver klara dem för att komma vidare.</p>
        <div className="center-bounce region">
        <span className="material-symbols-outlined">
          arrow_downward
        </span>
        </div>
        <div className="center">
        <Link className="button" to="/start">Börja här!</Link>
        </div>
      </section>
      {!consent && (
        <div className="cookies">
          <div className="region flow">
            <h2>Viktiga kakor!</h2>
            <p>Den här sidan använder cookies för att du ska kunna delta!</p>
            <button className="button" onClick={handleButtonClick}>Jag förstår</button>
          </div>
          <img src="./cookies.png" alt="Monster som mumsar kaka." />
        </div>
      )}
    </main>
  )
}

export default Landing
