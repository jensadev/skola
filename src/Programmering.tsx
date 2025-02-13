import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'

function Programmering(props: {
  triggerConfetti: () => void,
  triggerTransition: () => void
}) {
  const navigate = useNavigate()
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState(false)
  const [count, setCount] = useState(0)
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const clicks = localStorage.getItem('programmeringClicks')
    if (clicks) {
      setCount(parseInt(clicks))
    }
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('programmeringClicks', newCount.toString());
    if (number === 9) {
      props.triggerTransition()
      props.triggerConfetti()
      localStorage.setItem('programmeringTimestamp', new Date().getTime().toString())
      setTimeout(() => {
        navigate('/fysik')
      }, 1500);
    } else {
      setColor(true)
      setShake(true);
      setTimeout(() => {
        setColor(false);
        setShake(false);
      }, 1000);
    }
  };

  return (
    <main className="wrapper">
      <ScrollToTopOnMount />
      <header className="hero region flow">
        <div className="intro">
          <p>Problemlösning kommer i olika former, bland annat...</p>
        </div>
        <h1 className='tertiary'>Programmering</h1>
        <p>På teknikprogrammet älskar vi att skapa, och kod är ett av de verktyg du får lära dig för att skapa. Genom att lära dig programmering utvecklar du färdigheter som är avgörande för många tekniska yrken.</p>
        <p>Programmering är en central del av teknikprogrammet och förbereder dig för yrken som programmerare, systemutvecklare, spelutvecklare och IT-konsult. Dessa yrken kräver kunskap i att skriva, testa och underhålla kod för att utveckla programvaror och applikationer.</p>
      </header>
      <section className={`region flow ${shake ? 'shake' : ''}`}>
        <h2>Upprepning, <span className="secondary">loopa</span>, iteration</h2>
        <p>Programmering handlar mycket om att kunna upprepa saker, och det är en av de mest användbara färdigheterna du kan lära dig. Från att gå igenom listor till att räkna upp och ned, datorn gör det med en hastighet och precision som är svår att slå.</p>
        <p>Här nedan är ett exempel på en <span className="secondary">for-loop</span>. Innan loopen så skapas en variabel med namnet <span className="primary">final</span>.</p>
        <pre>
          <code>
            {`let final

for (let i = 0; i < 10; i++) {
  final = i
}`}
          </code>
        </pre>
        <div className="center">
          <p>Vad har <span className="primary">final</span> för <span className="tertiary">värde</span> när loopen är färdig?</p>
        </div>
        <div className="buttonControls">
          <div className="numButtons">
            <button className="button" onClick={() => setNumber(number - 1)}><span className="material-symbols-outlined">
              remove
            </span></button>
            <span className='tertiary'>{number}</span>
            <button className="button" onClick={() => setNumber(number + 1)}><span className="material-symbols-outlined">
              add
            </span></button>
          </div>
          <button
            className={color ? 'button red' : 'button'}
            onClick={handleClick}>Gissa</button>
        </div>
        <p>Tips: <span className="secondary">loopen</span> styrs av ett villkor, i det här fallet när <code>i</code> är mindre än <code>10</code>.</p>
      </section>
    </main>
  )
}

export default Programmering