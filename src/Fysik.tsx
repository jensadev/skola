import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import torget from './assets/torget.png'

function Fysik(props: {
  triggerConfetti: () => void,
  triggerTransition: () => void
}) {
  const navigate = useNavigate()
  const [distance, setDistance] = useState(0)
  const [color, setColor] = useState(false)

  const handleClick = () => {
    if (distance === 68) {
      props.triggerTransition()
      props.triggerConfetti()
      setTimeout(() => {
        navigate('/webbutveckling');
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
        <h1 className='secondary'>Fysik</h1>
        <p>Fysik är grunden för teknik och ingenjörskonst. Den ger oss en förståelse
          för hur universum fungerar och de lagar som styr det. Denna kunskap är
          avgörande för att utveckla nya tekniker och lösa tekniska problem.</p>
      </header>
      <section className="region flow">
        <h2>Eko och <span className="primary">avstånd</span></h2>
        <p>Traditionsenligt firar vi på NTI Gymnasiet Umeå studenten med en middag
          på resturang Rex. Resturangen ligger i Rådhuset. Rådhuset ligger på
          andra sidan Rådhustorget, mitt emot skolan.
        </p>
        <img className="torg" src={torget} alt="Bild på torget" />
        <p>Om du står och <strong>skriker</strong> från skolan till någon vid Rådhuset så
          hör du ekot av ditt skrik efter cirka 0.4 sekunder
          (med variation på grund av temperatur och luftfuktighet).</p>
        <p>Ljudets hastighet är <span className="secondary">340 meter per sekund</span>,
          och du hör ekot efter 0.4 sekunder, så ljudet har
          färdats <span className="spoiler">
            340 * 0.4 = 136 meter
          </span>.</p>
        <div className="flow">
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