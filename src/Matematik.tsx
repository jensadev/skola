import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'

function Matematik(props: {
  triggerConfetti: () => void,
  triggerTransition: () => void
}) {
  const navigate = useNavigate()
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState(false)

  const handleClick = () => {
    if (number === 6) {
      props.triggerTransition()
      props.triggerConfetti()
      setTimeout(() => {
        navigate('/programmering')
      }, 3000);
    } else {
      const wrongCount = localStorage.getItem('matteQuestion') || '0'
      localStorage.setItem('matteQuestion', (parseInt(wrongCount) + 1).toString());
      setColor(true)
      setTimeout(() => setColor(false), 1000)
    }
  };


  return (
    <main className="wrapper">
      <ScrollToTopOnMount />
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
          sidan på en kvadrat. Till din hjälp känner du till arean på kvadraten.</p>

        <p>Om <span className="primary">arean</span> på kvadraten
          är <strong>36</strong> kvadratcentimeter, hur många centimeter
          är <span className="secondary">sidan</span> kvadraten?</p>
        <div className="buttonControls">
          <div className="numButtons">
            <button className="button" onClick={() => setNumber(number - 1)}><span className="material-symbols-outlined">
              remove
            </span></button>
            <span className='primary'>{number} cm</span>
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

export default Matematik