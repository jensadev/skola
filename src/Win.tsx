import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'

function Win(props: {
  triggerConfetti: (options?: object) => void,
  triggerTransition: () => void
}) {
  const location = useLocation();
  const [name, setName] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get('namn');
    if (name && name.length > 2 && /^[a-zA-Z]+$/.test(name)) {
      props.triggerConfetti({ emojis: ['🦄'], confettiRadius: 100, confettiNumber: 30, emojiSize: 100 })
      setName(name);

      const endTimestamp = Number(localStorage.getItem('endTimestamp'));
      const startTimestamp = Number(localStorage.getItem('startTimestamp'));

      if (!endTimestamp || endTimestamp < startTimestamp) {
        const timestamp = new Date().getTime();
        localStorage.setItem('endTimestamp', timestamp.toString());
      }
    }

    const intervalId = setInterval(() => {
      props.triggerConfetti({ emojis: ['🦄'], confettiRadius: 100, confettiNumber: 30 })
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [location, props]);

  const scoreCard = {
    name,
    startTime: localStorage.getItem('startTimestamp') || '0',
    endTime: localStorage.getItem('endTimestamp') || '0',
    completionTime: (parseInt(localStorage.getItem('endTimestamp') || '0') - parseInt(localStorage.getItem('startTimestamp') || '0')) / 1000,
    start: {
      guesses: parseInt(localStorage.getItem('startClicks') || '0'),
      timestamp: localStorage.getItem('startTimestamp') || '0'
    },
    kemi: {
      guesses: parseInt(localStorage.getItem('kemiClicks') || '0'),
      timestamp: localStorage.getItem('kemiTimestamp') || '0'
    },
    matte: {
      guesses: parseInt(localStorage.getItem('matteClicks') || '0'),
      timestamp: localStorage.getItem('matteTimestamp') || '0'
    },
    programmering: {
      guesses: parseInt(localStorage.getItem('programmeringClicks') || '0'),
      timestamp: localStorage.getItem('programmeringTimestamp') || '0'
    },
    fysik: {
      guesses: parseInt(localStorage.getItem('fysikClicks') || '0'),
      timestamp: localStorage.getItem('fysikTimestamp') || '0'
    },
    webb: {
      guesses: parseInt(localStorage.getItem('webbClicks') || '0'),
      timestamp: localStorage.getItem('webbTimestamp') || '0'
    },
    landingClicks: parseInt(localStorage.getItem('landingClicks') || '0')
  }


  return (
    <main className="wrapper">
      <ScrollToTopOnMount />
      <header className="hero region flow">
        <div className="intro">
          <p>Du är en stjärna ⭐</p>
        </div>
        <h1 className='bounce'>Grattis <span className="primary name">{scoreCard.name}</span>!</h1>
        <p>På riktigt, bra jobbat, du förtjänar enhörningar 🦄</p>
      </header>
      <section className="region flow">
        <h2 className='tertiary'>Så hur gick det för dig?</h2>
        <ul className='scorecard flow'>
          {+scoreCard.start.timestamp > 0 && +scoreCard.kemi.timestamp > 0 && +scoreCard.matte.timestamp > 0 && +scoreCard.programmering.timestamp > 0 && +scoreCard.fysik.timestamp > 0 && +scoreCard.webb.timestamp > 0 ?
            <>
              <li>Du började kl. <span className="primary">{new Intl.DateTimeFormat('sv-SE', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(parseInt(scoreCard.startTime)))}</span> och avslutade kl. <span className="secondary">{new Intl.DateTimeFormat('sv-SE', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(parseInt(scoreCard.endTime)))}</span>.</li>
              <li>Du klarade det på <span className="tertiary">{Math.round(scoreCard.completionTime)}</span> sekunder eller <span className="tertiary">{Math.round(scoreCard.completionTime / 60)}</span> minuter.</li>
              <li>Du behövde <span className="green">{scoreCard.start.guesses}</span> försök för att hitta den dolda länken.</li>
              <li>Du svarade rätt på förbränningen efter <span className="green">{scoreCard.kemi.guesses}</span> försök.</li>
              <li>Du behövde <span className="green">{scoreCard.matte.guesses}</span> gissning{scoreCard.matte.guesses > 1 ? "ar" : ""} för att räkna ut sidan på kvadraten.</li>
              <li>Du kanske har jobbat med iteration tidigare, det tog dig <span className="green">{scoreCard.programmering.guesses}</span> försök att svara rätt.</li>
              <li>Du är nog inte som ekot och reser dubbla sträckan bara för nöjes skull. På <span className="green">{scoreCard.fysik.guesses}</span> försök studsade du rätt.</li>
              <li>Du fick lida <span className="green">{scoreCard.webb.guesses}</span> gång{scoreCard.webb.guesses > 1 ? "er" : ""} för att någon struntat i att lära sig om webb-tillgänglighet.</li>
              <li>Du klickade också checkboxen på startsidan <span className="green">{scoreCard.landingClicks}</span> gång{scoreCard.landingClicks > 1 ? "er" : ""} {scoreCard.landingClicks > 0 ? ', ingen vet varför' : ''}.</li>

            </> : <li className='red'>Det verkar som att du inte har klarat av alla momenten, fiskigt.</li>}
        </ul>
        <p><span className="tertiary">Tack</span> för idag, om du vill veta mer om vår skola så hittar du information på vår hemsida, <a href="https://ntigymnasiet.se/umea/" target='_blank'>NTI Gymnasiet Umeå</a>.</p>
      </section>
      <section className="region flow">
        <h2>Just det där var <span className="primary">intressant?</span></h2>
        <p>På den här sidan har vi återkommande försökt berätta vad Teknikprogrammet kan leda till och hur du kan använda färdigheterna du lär dig på programmet. Här är en lista över de yrken och utbildningar som nämnts.</p>
        <p>För att nå dit, eller att kanske hitta <span className="tertiary">ditt</span> mål så kan du behöva läsa vidare, det som Teknikprogrammet förbered dig på.</p>
        <h3>Möjliga <span className="secondary">utbildningar</span> kan vara:</h3>
        <ul>
          <li><strong>Gymnasieingenjör</strong>: Läs ett fjärde år hos oss på teknikprogrammet! Ett praktisk påbyggnadsår med inriktning på webb och programmering. <a href="https://ntigymnasiet.se/umea/program/gymnasieingenjorsprogrammet/mjukvarudesign/" target='_blank'>Läs mer här</a>.</li>
          <li><strong>Ingenjör</strong>: <ul>
            <li>
              Civilingenjörsutbildning (t.ex. maskinteknik, elektroteknik, byggteknik)
            </li>
            <li>
              Högskoleingenjörsutbildning</li>
          </ul></li>
          <li><strong>Arkitekt</strong></li>
          <li><strong>Datavetare och systemutvecklare</strong>: <ul>
            <li>Kandidatprogram i datavetenskap, systemvetenskap eller programvaruteknik</li><li>
              Yrkeshögskoleutbildning inom programmering eller systemutveckling</li></ul></li>
          <li><strong>Spelutvecklare</strong>: <ul>

            <li>Kandidatprogram i spelutveckling eller digitala medier</li><li>
              Yrkeshögskoleutbildning inom spelutveckling</li>
          </ul>
          </li>
        </ul>
        <h3>Vilket gör att du i framtiden kan <span className="tertiary">arbeta</span> som:</h3>
        <ul> <li><strong>Ingenjör</strong>: Arbetar med att designa, utveckla och förbättra tekniska system och produkter. Exempel inkluderar civilingenjör, maskiningenjör och elektroteknikingenjör.</li> <li><strong>Arkitekt</strong>: Designar byggnader och andra strukturer som är både funktionella och estetiskt tilltalande. Kräver en djup förståelse för fysik och matematik.</li> <li><strong>Programmerare</strong>: Skriver, testar och underhåller kod för att utveckla programvaror och applikationer. Viktigt inom många tekniska och kreativa branscher.</li> <li><strong>Systemutvecklare</strong>: Utvecklar och underhåller IT-system och programvara, ofta med fokus på att förbättra effektiviteten och användarupplevelsen.</li> <li><strong>Spelutvecklare</strong>: Skapar och programmerar datorspel, inklusive design, grafik och spelmekanik.</li> <li><strong>IT-konsult</strong>: Rådgiver företag och organisationer om hur de bäst kan använda IT för att uppnå sina mål. Arbetar ofta med att implementera och anpassa tekniska lösningar.</li> <li><strong>Livsmedelstekniker</strong>: Arbetar med att utveckla och förbättra processer för att producera och konservera livsmedel.</li> <li><strong>Processingenjör</strong>: Utvecklar och optimerar industriella processer för att förbättra effektiviteten och kvaliteten på produktionen.</li> <li><strong>Automationsingenjör</strong>: Designar och implementerar automatiserade system för att effektivisera produktionen och minska mänskliga fel.</li> <li><strong>Kemiingenjör</strong>: Använder kemiska processer för att utveckla nya material och produkter, samt förbättra befintliga tillverkningsprocesser.</li> <li><strong>Analytiker</strong>: Arbetar inom finans, försäkring och IT, där de använder matematiska modeller för att analysera data och göra prognoser.</li> <li><strong>Statistiker och aktuarier</strong>: Använder statistik och sannolikhetsteori för att analysera risker och fatta beslut inom försäkrings- och finanssektorn.</li> <li><strong>Underhållsmekaniker</strong>: Utför underhåll och reparationer på maskiner och utrustning för att säkerställa att de fungerar korrekt och effektivt.</li> </ul>
            <p><span className="secondary">Hej</span> då!</p>
      </section>
    </main>
  )
}

export default Win