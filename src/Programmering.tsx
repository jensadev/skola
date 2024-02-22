import { useNavigate } from 'react-router-dom'
import JSConfetti from 'js-confetti';
import { useState } from 'react';

function Programmering() {
  const navigate = useNavigate()
  const jsConfetti = new JSConfetti()
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    if (number === 9) {
      jsConfetti.addConfetti();
      setTimeout(() => {
        navigate('/fysik', { replace: true });
      }, 3000);
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
          <h2>Vad har final för värde när loopen är färdig?</h2>
        </div>
        <div className="buttonControls">
          <div className="numButtons">
            <button className="button" onClick={() => setNumber(number - 1)}>-</button>
            <span>{number} centimeter</span>
            <button className="button" onClick={() => setNumber(number + 1)}>+</button>
          </div>
          <button className="button" onClick={handleClick}>Gissa</button>
        </div>
      </section>
    </main>
  )
}

export default Programmering