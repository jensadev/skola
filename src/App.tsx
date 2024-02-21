import { Routes, Route } from 'react-router-dom'

import Landing from './Landing'
import Start from './Start'
import Kemi from './Kemi'
import Matematik from './Matematik'
import Programmering from './Programmering'
import Webb from './Webb'
import Win from './Win'
import Fysik from './Fysik'
import { useEffect, useState, useRef } from 'react'
import JSConfetti from 'js-confetti'

function App() {
  const jsConfettiRef = useRef<JSConfetti>()
  const [consent, setConsent] = useState(false);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti()
  }, [])

  useEffect(() => {
    const storedConsent = localStorage.getItem('consent');
    if (storedConsent) {
      setConsent(storedConsent === 'true');
    }
  }, []);

  const handleButtonClick = () => {
    setConsent(true);
    localStorage.setItem('consent', 'true');
  };

  const triggerConfetti = (options?: object) => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti(options)
    }
  }

  const triggerTransition = () => {
    setTransition(true)
    setTimeout(() => {
      setTransition(false)
    }, 3000);
  }

  return (
    <div className="App">
      {transition && (
        <div className="overlay"> </div>
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="start" element={<Start triggerConfetti={triggerConfetti} triggerTransition={triggerTransition} />} />
        <Route path="kemi" element={<Kemi triggerConfetti={triggerConfetti} triggerTransition={triggerTransition} />} />
        <Route path="matematik" element={<Matematik triggerConfetti={triggerConfetti} triggerTransition={triggerTransition} />} />
        <Route path="programmering" element={<Programmering triggerConfetti={triggerConfetti} triggerTransition={triggerTransition} />} />
        <Route path="webbutveckling" element={<Webb triggerConfetti={triggerConfetti} triggerTransition={triggerTransition} />} />
        <Route path="fysik" element={<Fysik triggerConfetti={triggerConfetti} triggerTransition={triggerTransition} />} />
        <Route path="end" element={<Win triggerConfetti={triggerConfetti} triggerTransition={triggerTransition} />} />
      </Routes>
      {!consent && (
        <div className="cookies">
          <div className="region flow">
            <h2>Viktiga kakor!</h2>
            <p>Den här sidan använder cookies för att du ska kunna delta!</p>
            <button className="button" onClick={handleButtonClick}>Jag förstår</button>
          </div>
          <img src="./cookies.png" alt="Monster som mumsar kaka." />
        </div>
      )}
    </div>
  )
}

export default App
