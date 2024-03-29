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
          <p>Det är inte så att det här börjar kännas som en skoldag?</p>
        </div>
        <h1 className='tertiary'>Programmering</h1>
        <p>Vi gillar att skapa på teknikprogrammet och kod är ett av de verktyg
          du får lära dig för att skapa.
        </p>
      </header>
      <section className={`region flow ${shake ? 'shake' : ''}`}>
        <h2>Upprepning, <span className="secondary">loopa</span>, iteration</h2>
        <p>Att kunna upprepa något ett visst antal gånger är en av grunderna i
          programmering. Det är så användbart i allt (upprepa vadsomhelst X gånger,
          gå igenom en lista, räkna upp, och ned (inte upp och ned)).
        </p>
        <p>Här nedan är ett exempel på en <span className="secondary">for-loop</span>. Innan loopen så initieras (skapas) en variabel med namnet <span className="primary">final</span>.</p>
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
        <p>Tips för dig som inte har programmerat så mycket, <span className="secondary">loopen</span> styrs av ett villkor, i det här fallet när <code>i</code> är mindre än <code>10</code>.</p>
      </section>
    </main>
  )
}

export default Programmering