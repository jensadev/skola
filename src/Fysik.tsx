import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import torget from './assets/torget.png'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'

function Fysik(props: {
  triggerConfetti: () => void,
  triggerTransition: () => void
}) {
  const navigate = useNavigate()
  const [distance, setDistance] = useState(0)
  const [color, setColor] = useState(false)
  const [count, setCount] = useState(0)
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const clicks = localStorage.getItem('fysikClicks')
    if (clicks) {
      setCount(parseInt(clicks))
    }
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('fysikClicks', newCount.toString());
    if (distance === 68) {
      props.triggerTransition()
      props.triggerConfetti()
      localStorage.setItem('fysikTimestamp', new Date().getTime().toString())
      setTimeout(() => {
        navigate('/webbutveckling');
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
          <p>De flesta av de här problemen är hämtade från åttonde klass, jag hoppas det inte är för svårt.</p>
        </div>
        <h1 className='secondary'>Fysik</h1>
        <p>Fysik är grunden för teknik och ingenjörskonst. Den ger oss en förståelse
          för hur universum fungerar och de lagar som styr det. Denna kunskap är
          avgörande för att utveckla nya tekniker och lösa tekniska problem.</p>
      </header>
      <section className={`region flow ${shake ? 'shake' : ''}`}>
        <h2>Eko och <span className="primary">avstånd</span></h2>
        <p>Traditionsenligt firar vi på NTI Gymnasiet Umeå studenten med en middag
          på resturang Rex. Resturangen ligger i Rådhuset. Rådhuset ligger på
          andra sidan Rådhustorget, mitt emot skolan.
        </p>
        <img className="torg" src={torget} alt="Bild på torget" />
        <p>Om du står och <strong>skriker</strong> från skolan till någon vid Rådhuset så
          hör du <span className="tertiary">ekot</span> av ditt skrik efter cirka 0.4 sekunder
          (med variation på grund av temperatur och luftfuktighet).</p>
        <p>Ljudets hastighet är <span className="secondary">340 meter per sekund</span>,
          och du hör <span className="tertiary">ekot</span> efter 0.4 sekunder, så ljudet har
          färdats <span className="spoiler">
            340 * 0.4 = 136 meter
          </span>.</p>
        <div className="flow fysik-form">
          <label htmlFor='distance'>Hur många meter är det mellan Rådhuset och skolan?</label>
          <input id="distance" name="distance" type="number" placeholder="00" onChange={(e) => setDistance(Number(e.target.value))} />
          <button
            className={color ? 'button red' : 'button'}
            onClick={handleClick}>Gissa</button>
        </div>
      </section>
    </main>
  )
}


export default Fysik