import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'
import "./Webb.css"

function Webb(props: {
  triggerConfetti: (options?: object) => void,
  triggerTransition: () => void
}) {
  const navigate = useNavigate();
  const [shake, setShake] = useState(false);
  const [name, setName] = useState('Skriv ditt namn');
  const [showButtons, setShowButtons] = useState(false);
  const [buttonOrder, setButtonOrder] = useState<string[]>([]);

  useEffect(() => {
    let clicks = parseInt(localStorage.getItem('webbClicks') ?? '0') || 0;
    clicks += 1;
    localStorage.setItem('webbClicks', clicks.toString());
  }, []);

  const handleSubmit = () => {
    if (name && name.length > 1 && /^[a-zA-Z]+$/.test(name)) {
      props.triggerTransition()
      props.triggerConfetti()
      localStorage.setItem('webbTimestamp', new Date().getTime().toString())
      setTimeout(() => {
        navigate('/end?namn=' + name)
      }, 1500)
    } else {
      props.triggerConfetti({ emojis: ['👿', '😭', '😡'], confettiRadius: 40, confettiNumber: 1, emojiSize: 100 })
      setShake(true)
      setTimeout(() => {
        setShake(false)
      }, 1000)
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.length > 1) {
      setShowButtons(true);
      setButtonOrder(shuffleArray(['Ja', 'Nej']));
    } else {
      setShowButtons(false);
    }
  };

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <main className="wrapper">
      <ScrollToTopOnMount />
      <header className="hero region flow">
        <div className="intro">
          <p>Nu är du nästan i mål, det är dags för <span className="primary">slutbossen</span>!</p>
        </div>
        <h1 className='secondary'>Webbutveckling</h1>
        <p>På teknikprogrammet lägger vi stor vikt vid webbutveckling. Att kunna skapa och förstå webbsidor tycker vi är både roligt och användbart. Genom kurserna Webbutveckling 1 och 2 samt Digitalt skapande får du lära dig både design och programmering.</p>
        <p>Dessa kurser ger dig färdigheter i att skapa och designa för både klienten (det du ser i webbläsaren) och servern (det som klienten kommunicerar med).</p>
        <p>Vi arbetar också med tillgänglighet och användbarhet, så att tekniken vi skapar är till för alla. Kunskaperna du får är värdefulla för framtida yrken som webbutvecklare, programmerare och IT-konsult, där du kan bidra till teknisk utveckling och innovation.</p>
      </header>
      <section className={`region flow ${shake ? 'shake' : ''}`}>
        <h2>Design och <span className="tertiary">tillgänglighet</span></h2>
        <p>Användbarhet och tillgänglighet på webben är något vi värdesätter högt. Att skapa webbsidor som är lätta att använda och förstå för alla är en viktig del av webbutveckling.</p>
        <p>Men det kan vara väldigt svårt att designa användbara produkter, eller ska vi säga användbara formulär. Frågan är om du kan fylla i formuläret här nedanför?</p>

        <input
          className='nameInput'
          placeholder="Skriv ditt namn"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        {showButtons && (
          <div className="buttonControls">
            {buttonOrder.map((text, index) => (
              <button key={index} onClick={handleSubmit}>{text}</button>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Webb