import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JSConfetti from 'js-confetti';

function Webb() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(
    () => {
      const jsConfetti = new JSConfetti();
      const params = new URLSearchParams(location.search);
      const name = params.get('name');
      if (name && name.length > 2 && /^[a-zA-Z]+$/.test(name)) {
        jsConfetti.addConfetti();
        setTimeout(() => {
          navigate('/end?name=' + name, { replace: true });
        }, 3000);
      }
    }, [location, navigate]);

  return (
    <main className="wrapper">
      <header className="hero region flow">
        <div className="intro">
          Nu är du nästan i mål, du ska bara...
        </div>
        <h1 className='secondary'>Webbutveckling</h1>
        <p>Är något som vi lägger stor vikt vid på vårat teknikprogram. Att kunna
          skapa och förstå webbsidor är både roligt och användbart.
        </p>
        <p>Vi gör detta i ett paket av kurser där du lär dig både design och programmering.
          Du får lära dig skapa och designa för klienten (det du ser i webbläsaren)
          och även för servern (det som klienten pratar med).
        </p>
      </header>
      <section className="region flow">
        <h2>Query <span className="tertiary">parametrar</span></h2>
        <p>Något som du säkert stött på, men kanske inte har tänkt på är query
          parametrar. Det hör ihop med det du läste tidigare om URLer (addresser).</p>
        <p>En query parameter är något som står i en URL, efter webbsidans adress.
          Det börjar med ett frågetecken och sedan kommer det en nyckel och ett värde.
        </p>
        <p>Det kan se ut såhär: <code>https://www.example.com/?nyckel=värde</code></p>
        <p>Du känner säkert igen det från till
          exempel <a href="https://www.youtube.com/">youtube</a>, där det visar
          vilket klipp du tittar på.</p>
        <h3>Skriv <span className="parimry">din egen</span> query parameter!</h3>
        <p>Du behöver nu redigera addressen på den här sidan så att den har en
          query parameter som heter <code>namn</code> och har värdet <code>ditt namn</code>.
        </p>
      </section>
    </main>
  )
}

export default Webb