import { useNavigate } from 'react-router-dom'
import JSConfetti from 'js-confetti'
import { useState } from 'react'

function Fysik() {
  const navigate = useNavigate()
  const jsConfetti = new JSConfetti()
  const [distance, setDistance] = useState(0)

  const handleClick = () => {
    if (distance === 68) {
      jsConfetti.addConfetti();
      setTimeout(() => {
        navigate('/webbutveckling', { replace: true });
      }, 3000);
    }
  };

  return (
    <main className="wrapper">
      <header className="hero region flow">
        <div className="intro">
          Snyggt jobbat, nu är det dags för lite
        </div>
        <h1>Fysik</h1>
        <p>På teknikprogrammet läser du kursen Kemi 1 i årskurs ett.</p>
      </header>
      <section className="region flow">
        <h2>Eko och avstånd</h2>
        <p>Traditionsenligt firar vi på NTI Gymnasiet Umeå studenten med en middag
           på resturang Rex. Resturangen ligger i Rådhuset, på andra sidan Rådhustorget 
           mitt emot skolan. Om du står och skriker från skolan till någon vid
           Rådhuset så hör du ekot av ditt skrik efter cirka 0.4 sekunder 
           (med variation på grund av temperatur och luftfuktighet).</p>
        <p>Ljudets hastighet är 340 meter per sekund, och du hör ekot efter 0.4 sekunder, så ljudet har färdats 340 * 0.4 = 136 meter</p>
        <label htmlFor='distance'>Hur många meter är det mellan Rådhuset och skolan?</label>
        <input id="distance" name="distance" type="number" value={distance} onChange={(e) => setDistance(Number(e.target.value))} />
    <button onClick={handleClick}>Submit</button>
      </section>
      {/* <div id="modal" className={countdown !== 5 ? 'modal' : 'hidden'}>
        <h2 className="red">{countdown}</h2></div> */}
    </main>
  )
}


export default Fysik