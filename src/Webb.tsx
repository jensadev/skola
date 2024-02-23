import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'

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
    }, [location])

  return (
    <main className="wrapper">
      <ScrollToTopOnMount />
      <header className="hero region flow">
        <div className="intro">
          Nu är du nästan i mål
        </div>
        <h1 className='secondary'>Webb-utveckling</h1>
        <p>Just webben är något som vi lägger stor vikt vid på vårat teknikprogram. Att kunna skapa och förstå webbsidor är både roligt och användbart.
        </p>
        <p>Vi gör detta i ett paket av kurser där du lär dig både design och programmering. Du får lära dig skapa och designa för klienten (det du ser i webbläsaren) och även för servern (det som klienten pratar med).
        </p>
      </header>
      <section className={`region flow ${shake ? 'shake' : ''}`}>
        <h2>Query <span className="tertiary">parametrar</span></h2>
        <p>Något som du säkert stött på, men kanske inte har tänkt på är query-parametrar. Det hör ihop med det du läste om på start-sidan, URL (webb-addresser).</p>
        <p>En query-parameter är något som står i en URL, efter webbsidans adress. Det börjar med ett frågetecken och sedan kommer det en <span className="secondary">nyckel</span> och ett <span className="tertiary">värde</span>.</p>
        <p>Det kan se ut såhär, <code>https://example.com/index<span className="secondary">?nyckel</span>=<span className="tertiary">värde</span></code></p>
        <p>Du kanske känner igen det från <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">youtube</a>, där det visar vilket klipp du tittar på.</p>
        <h3>Skriv <span className="primary">din egen</span> query parameter!</h3>
        <p>Du behöver nu redigera addressen på den här sidan så att den har en query parameter som heter <code className='secondary'>namn</code> och har värdet <code className='tertiary'>ditt namn</code>.</p>
        <p>För att göra det letar du efter <span className="material-symbols-outlined">edit</span> ikonen när du klickat i adressfältet (Android).</p>
      </section>
    </main>
  )
}

export default Webb