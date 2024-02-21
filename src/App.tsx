import { Routes, Route } from 'react-router-dom'

import Landing from './Landing'
import Start from './Start'
import Kemi from './Kemi'
import Matematik from './Matematik'
import Programmering from './Programmering'
import Webb from './Webb'
import Win from './Win'
import Fysik from './Fysik'
import { useEffect, useState } from 'react'

function App() {
  const [consent, setConsent] = useState(false);

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
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="start" element={<Start />} />
        <Route path="kemi" element={<Kemi />} />
        <Route path="matematik" element={<Matematik />} />
        <Route path="programmering" element={<Programmering />} />
        <Route path="webbutveckling" element={<Webb />} />
        <Route path="end" element={<Win />} />
        <Route path="fysik" element={<Fysik />} />
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
