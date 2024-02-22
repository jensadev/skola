import { Link } from "react-router-dom";
import { useState } from "react";

function Kemi() {
  const [answer, setAnswer] = useState(null);

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData('id', id);
  };

  const handleDrop = (event) => {
    const id = event.dataTransfer.getData('id');
    if (id === 'correct-item') {
      setAnswer('correct');
    } else {
      setAnswer('incorrect');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <main className="wrapper">
      <header className="hero region flow">
        <div className="intro">
          Snyggt jobbat, nu är det dax för
        </div>
        <h1>Kemi</h1>
        <p>På teknikprogrammet läser du kursen Kemi 1 i årskurs ett.</p>
      </header>
      <section className="region flow">
        <h2></h2>
        <p>Intro....</p>
        <div className="drag">
          <div
            id="dropzone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{ height: '150px', width: '150px', border: '1px solid black' }}
          >
            Drop here
          </div>

          <div
            id="correct-item"
            draggable
            onDragStart={(event) => handleDragStart(event, 'correct-item')}
          >
            Correct Item
          </div>

          {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
            <div
              id={`incorrect-item-${i}`}
              draggable
              onDragStart={(event) => handleDragStart(event, `incorrect-item-${i}`)}
            >
              Incorrect Item {i}
            </div>
          ))}

          {answer && <p>The answer is {answer}</p>}
        </div>
        <Link to="/matematik">Matematik</Link>
      </section>
      {/* <div id="modal" className={countdown !== 5 ? 'modal' : 'hidden'}>
        <h2 className="red">{countdown}</h2></div> */}
    </main>
  )
}

export default Kemi