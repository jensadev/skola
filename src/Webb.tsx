import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'
import urlSvg from './assets/url.svg'

function Webb(props: {
  triggerConfetti: (options?: object) => void,
  triggerTransition: () => void
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [shake, setShake] = useState(false);

  useEffect(() => {
    let clicks = parseInt(localStorage.getItem('webbClicks') ?? '0') || 0;
    clicks += 1;
    localStorage.setItem('webbClicks', clicks.toString());
  }, []);

  useEffect(
    () => {
      const params = new URLSearchParams(location.search)
      const name = params.get('namn')

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
    }, [location, navigate, props])

  return (
    <main className="wrapper">
      <ScrollToTopOnMount />
      <header className="hero region flow">
        <div className="intro">
          <p>Nu är du nästan i mål, det är dags för <span className="primary">slutbossen</span>!</p>
        </div>
        <h1 className='secondary'>Webb-utveckling</h1>
        <p>Just webben är något som vi lägger stor vikt vid på vårat teknikprogram. Att kunna skapa och förstå webbsidor är både roligt och användbart.
        </p>
        <p>Vi gör detta i ett paket av kurser där du lär dig både design och programmering. Du får lära dig skapa och designa för klienten (det du ser i webbläsaren) och även för servern (det som klienten pratar med).
        </p>
      </header>
      <section className={`region flow ${shake ? 'shake' : ''}`}>
        <h2>Query <span className="tertiary">parametrar</span></h2>
        <p>Något som du säkert stött på, men kanske inte har tänkt på är query-parametrar. Det hör ihop med URL (adresser på nätet) som du stötte på i första sidans pussel.</p>
        <p>En query-parameter är något som står efter webbsidans domän i en URL. Det börjar med ett frågetecken och sedan kommer det en <span className="secondary">nyckel</span> och ett <span className="tertiary">värde</span>.</p>
        <img src={urlSvg} className='primary' alt="Illustration av url" />
        <p>Du kanske känner igen det från <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">youtube</a>, där det visar vilket klipp du tittar på.</p>
        <h3>Skriv <span className="secondary">din egen</span> query parameter!</h3>
        <p>Du behöver nu redigera addressen på den här sidan så att den har en query parameter med nyckeln <code className='secondary'>namn</code> och värdet av <code className='tertiary'>ditt namn</code>.</p>
        <p>För att göra det klickar du på <span className="material-symbols-outlined">edit</span> ikonen efter du har klickat i adressfältet (Android).</p>
      </section>
    </main>
  )
}

export default Webb