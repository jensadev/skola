import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';

function Matematik() {
  const [answer, setAnswer] = useState('');
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === 'correct') {
      setAnswer('correct');
    } else {
      setAnswer('incorrect');
    }
  };


  return (
    <main className="wrapper">
    <header className="hero region flow">
      <div className="intro">
        Det tar sig sa...
      </div>
      <h1>Matematik</h1>
      <p>Det är en fördel om du åtminstone tycker att matematik är okej när du läser 
        teknikprogrammet. Det går nog till och med att säga att det är bra om
        du gillar matematik. Teknikprogrammet innehåller nämligen minst tre kurser 
        i matematik. 
      </p>
    </header>
    <section className="region flow">
      <h2></h2>
      <p>Något att räkna en formel, huvudräkning.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {answer && <p>The answer is {answer}</p>}
      Matematik - <Link to="/programmering">Programmering</Link>      </section>
      {/* <div id="modal" className={countdown !== 5 ? 'modal' : 'hidden'}>
        <h2 className="red">{countdown}</h2></div> */}
    </main>
    )
  }

export default Matematik