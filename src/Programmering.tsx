import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Programmering(props: {
  triggerConfetti: () => void,
  triggerTransition: () => void
}) {
  const navigate = useNavigate()
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState(false)

  const handleClick = () => {
    if (number === 9) {
      props.triggerTransition()
      props.triggerConfetti()
      setTimeout(() => {
        navigate('/fysik')
      }, 3000);
    } else {
      setColor(true)
      setTimeout(() => setColor(false), 1000)
    }
  };

  return (
    <main className="wrapper">
      <header className="hero region flow">
        <div className="intro">
          Snyggt jobbat, nu är det dags för lite
        </div>
        <h1 className='tertiary'>Programmering</h1>
        <p>Vi gillar att skapa på teknikprogrammet och kod är ett av de verktyg
          du får lära dig.
        </p>
      </header>
      <section className="region flow">
        <h2>Upprepning, eller iteration</h2>
        <p>Att kunna upprepa något ett visst antal gånger är en av grunderna i
          programmering. Det är så användbart i allt (upprepa vadsomhelst X gånger,
          gå igenom en lista, räkna upp, och ned (inte upp och ned)).
        </p>
        <p>Här nedan är ett exempel på en for loop. Det finns även en variabel med
          namnet final.</p>
        <pre>
          <code>
            {`let final
for (let i = 0; i < 10; i++) {
  final = i
}`}
          </code>
        </pre>
        <div className="center">
          <p>Vad har final för <span className="tertiary">värde</span> när loopen är färdig?</p>
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
      </section>
    </main>
  )
}

export default Programmering