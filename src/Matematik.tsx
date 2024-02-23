import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'
import './Matematik.css'

function Matematik(props: {
  triggerConfetti: () => void,
  triggerTransition: () => void
}) {
  const navigate = useNavigate()
  const [number, setNumber] = useState(0)
  const [color, setColor] = useState(false)
  const [count, setCount] = useState(0)
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const clicks = localStorage.getItem('matteClicks')
    if (clicks) {
      setCount(parseInt(clicks))
    }
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('matteClicks', newCount.toString());
    if (number === 6) {
      props.triggerTransition()
      props.triggerConfetti()
      localStorage.setItem('matteTimestamp', new Date().getTime().toString())
      setTimeout(() => {
        navigate('/programmering')
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
          <p>Det här går som ett <span className="primary">räkneverk</span>!</p>
        </div>
        <h1>Matematik</h1>
        <p>Det är en fördel om du åtminstone tycker att matematik är okej när du läser
          teknikprogrammet. Det går nog till och med att säga att det är bra om
          du gillar matematik.</p>
        <p>Teknikprogrammet innehåller nämligen minst <span className="tertiary">tre</span> kurser
          i matematik. </p>
      </header>
      <section className={`region flow ${shake ? 'shake' : ''}`}>
        <h2><span className="secondary">Kvadrater</span> och area</h2>
        <p>Nu har du din chans att briljera och visa att du hängt med på matten.</p>
        <p>Tämligen ofta så behöver du kunna räkna ut något okänt, i det här fallet
          sidan på en kvadrat. Till din hjälp känner du till arean på kvadraten.</p>

        <div className="kvadrat-container">
          <div className="kvadrat">
            <span className='left'>x</span>
            <span className='bottom'>x</span>
          </div>
        </div>

        <p>Om <span className="primary">arean</span> på kvadraten
          är <strong>36</strong> kvadratcentimeter, hur många centimeter
          är <span className="secondary">sidan</span> på kvadraten?</p>
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