import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import JSConfetti from 'js-confetti'

function Start() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const [colorText, setColorText] = useState(false)
  const jsConfetti = new JSConfetti()

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
        <h1 className='secondary'>Start</h1>
        <p>Nu kör vi!</p>
      </header>
      <section className="region flow">
        <h2>Vad är <span className="tertiary">teknikprogrammet</span>?</h2>
        <p>Teknikprogrammet är ett studieförberedande program, det innehåller både
          teori och praktik.</p>
        <p>Ett exempel på teori från kursen webbutveckling är att lära sig vad en
          <button
            className={colorText ? 'stealth red' : 'stealth'}
            onClick={handleButtonClick}>URL</button> (en address till en annan webbsida) är.
          En <button className="stealth" onClick={() => nextPage()}>URL</button>
          kan du antingen klicka dig till, en länk på en webbsida, eller behöva 
          skriva in i webbläsarens address-fält.</p>
        <p>På den här sidan finns en
          <button
            className={colorText ? 'stealth red' : 'stealth'}
            onClick={handleButtonClick}>dold</button> länk till en URL som tar
          dig vidare till nästa sida, kan du hitta den?</p>
      </section>
    </main>
  );
}

export default Start