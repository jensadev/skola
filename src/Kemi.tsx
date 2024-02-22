import { useNavigate } from 'react-router-dom'
import JSConfetti from 'js-confetti';

function Kemi() {
  const navigate = useNavigate()
  const jsConfetti = new JSConfetti()

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const correctAnswer = 'Energi + Koldioxid + Vatten';
    if ((event.target as HTMLElement).innerText === correctAnswer) {
      jsConfetti.addConfetti()
      setTimeout(() => {
        navigate('/matematik', { replace: true })
      }, 3000)
    }
  };

  return (
    <main className="wrapper">
      <header className="hero region flow">
        <div className="intro">
          Snyggt jobbat, nu är det dags för lite
        </div>
        <h1 className='secondary'>Kemi</h1>
        <p>På teknikprogrammet läser du kursen Kemi 1 i årskurs ett.</p>
      </header>
      <section className="region flow">
        <h2>Förbränning av <span className="primary">organiska föreningar</span></h2>
        <p>Vad ger förbränningen av organiska föreningar huvudsakligen?</p>
        <div className="kemi">
          <div className="center">
          <h2>Kolväte + Syre</h2>
          </div>
          <div className="center-bounce region">
          <span className="material-symbols-outlined">
            arrow_downward
          </span>
        </div>
          <button className="button" onClick={handleClick}>Energi + Koldioxid</button>
          <button className="button" onClick={handleClick}>Energi + Koldioxid + Vatten</button>
          <button className="button" onClick={handleClick}>Energi</button>
          <button className="button" onClick={handleClick}>Koldioxid + Vatten</button>
        </div>
      </section>
      {/* <div id="modal" className={countdown !== 5 ? 'modal' : 'hidden'}>
        <h2 className="red">{countdown}</h2></div> */}
    </main>
  )
}

export default Kemi