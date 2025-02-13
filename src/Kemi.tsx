import { useNavigate } from 'react-router-dom'
import { useState , useEffect} from 'react'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'
import './Kemi.css'

function Kemi(props: { 
  triggerConfetti: () => void, 
  triggerTransition: () => void }) {
  const navigate = useNavigate()
  const [colorText, setColorText] = useState(false)
  const [count, setCount] = useState(0)
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const clicks = localStorage.getItem('kemiClicks')
    if (clicks) {
      setCount(parseInt(clicks))
    }
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('kemiClicks', newCount.toString());

    const correctAnswer = 'Energi + Koldioxid + Vatten';
    if ((event.target as HTMLElement).innerText === correctAnswer) {
      props.triggerTransition()
      props.triggerConfetti()
      localStorage.setItem('kemiTimestamp', new Date().getTime().toString())
      setTimeout(() => {
        navigate('/matematik')
      }, 1500)
    } else {
      setColorText(true)
      setShake(true);
      setTimeout(() => {
        setColorText(false);
        setShake(false);
      }, 1000);
    }
  };

  return (
    <main className="wrapper">
      <ScrollToTopOnMount />
      <header className="hero region flow">
        <div className="intro">
          Snyggt jobbat, ett ämne du känner till från åttan är
        </div>
        <h1 className='secondary'>Kemi</h1>
        <p>På teknikprogrammet läser du kursen Kemi i årskurs ett. Syftet med ämnet kemi är att ge insikt i miljö, klimat, människa och naturens processer genom att utveckla kunskap om kemiska begrepp, modeller, teorier och metoder.</p><p> På teknikprogrammet läser du kemi för att förstå tekniska processer, främja hållbar utveckling och förbereda dig för yrken som ingenjör, livsmedelstekniker och underhållsmekaniker.</p>
      </header>
      <section className={`region flow ${shake ? 'shake' : ''}`}>
        <h2><span className="material-symbols-outlined tertiary icon-large">local_fire_department</span> Förbränning av<span className="primary"> organiska </span>föreningar</h2>
        <p>Vad ger förbränningen av organiska föreningar huvudsakligen?</p>
        <div className="kemi">
          <ul className='kemi-list'>
            <li>
              Kolväte <span className="material-symbols-outlined">forest</span>
            </li>
            <li><span className="material-symbols-outlined tertiary">add</span></li>
            <li>Syre <span className="material-symbols-outlined">spo2</span></li>
          </ul>
          <div className="center bounce region">
            <span
              style={{ color: colorText ? 'red' : 'initial' }}
              className="material-symbols-outlined">
              arrow_downward
            </span>
          </div>
          <button className="button" onClick={handleClick}>Energi + Koldioxid</button>
          <button className="button" onClick={handleClick}>Energi + Koldioxid + Vatten</button>
          <button className="button" onClick={handleClick}>Energi</button>
          <button className="button" onClick={handleClick}>Koldioxid + Vatten</button>
        </div>
      </section>
    </main>
  )
}

export default Kemi