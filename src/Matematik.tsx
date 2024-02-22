import { useNavigate } from 'react-router-dom'
import JSConfetti from 'js-confetti';
import { useState } from 'react';

function Matematik() {
  const navigate = useNavigate()
  const jsConfetti = new JSConfetti()
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    if (number === 6) {
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
          Det tar sig sa...
        </div>
        <h1>Matematik</h1>
        <p>Det är en fördel om du åtminstone tycker att matematik är okej när du läser
          teknikprogrammet. Det går nog till och med att säga att det är bra om
          du gillar matematik.</p>
        <p>Teknikprogrammet innehåller nämligen minst tre kurser
          i matematik. </p>
      </header>
      <section className="region flow">
        <h2>Kvadrater och area</h2>
        <p>Nu har du din chans att briljera och visa att du hängt med på matten.</p>
        <p>Tämligen ofta så behöver du kunna räkna ut något okänt, i det här fallet
          sidan på en kvadrat. Till din hjälp känner du till arean på rektangeln.</p>

        <p>Om <span className="primary">arean</span> på rektangeln 
        är <strong>36</strong> kvadratcentimeter, hur många centimeter 
        är <span className="secondary">sidan</span> kvadraten?</p>
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

export default Matematik