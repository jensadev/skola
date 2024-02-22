import { Routes, Route } from 'react-router-dom'

import Landing from './Landing'
import Start from './Start'
import Kemi from './Kemi'
import Matematik from './Matematik'
import Programmering from './Programmering'
import Webb from './Webb'
import Win from './Win'
import Fysik from './Fysik'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="start" element={<Start />} />
        <Route path="kemi" element={<Kemi />} />
        <Route path="matematik" element={<Matematik />} />
        <Route path="programmering" element={<Programmering />} />
        <Route path="webbutveckling" element={<Webb />} />
        <Route path="finish" element={<Win />} />
        <Route path="fysik" element={<Fysik />} />
      </Routes>
    </div>
    )
}

export default App
