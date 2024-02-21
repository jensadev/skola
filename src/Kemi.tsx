import { Link } from "react-router-dom";
import { useState } from "react";

function Kemi() {
  const [answer, setAnswer] = useState("");
  const [dragId, setDragId] = useState(null); 

  const handleTouchMove = (event) => {
    event.preventDefault(); // Prevent scrolling when touching an element
  };

  const handleDragStart = (id) => {
    setDragId(id);
  };

  const handleDrop = (id) => {
    if (id === 'correct-item') {
      // Handle correct answer
    } else {
      // Handle incorrect answer
    }
  };

  return (
    <main className="wrapper">
      <header className="hero region flow">
        <div className="intro">
          Snyggt jobbat, nu är det dags för
        </div>
        <h1>Kemi</h1>
        <p>På teknikprogrammet läser du kursen Kemi 1 i årskurs ett.</p>
      </header>
      <section className="region flow">
        <h2>Förbränning</h2>
        <p>Den kemiska formeln är lika för alla kolväten.</p>
        <div className="kemi">
          <div className="box">
            Kolväte
          </div>
          <div className="box">
            <span className="material-symbols-outlined">
              add
            </span>
          </div>
          <div className="box">
            Syre
          </div>
        </div>
        <div className="center-bounce region">
          <span className="material-symbols-outlined">
            arrow_downward
          </span>
        </div>
        <div>
      <div
        id="correct-item"
        draggable
        onDragStart={() => handleDragStart('correct-item')}
        onTouchStart={() => handleDragStart('correct-item')}
        onTouchMove={handleTouchMove}
      >
        Correct Item
      </div>

      <div
        id="incorrect-item-1"
        draggable
        onDragStart={() => handleDragStart('incorrect-item-1')}
        onTouchStart={() => handleDragStart('incorrect-item-1')}
        onTouchMove={handleTouchMove}
      >
        Incorrect Item
      </div>

      <div
        id="dropzone"
        onDragOver={(event) => event.preventDefault()} // Required to allow drop
        onDrop={() => handleDrop(dragId)}
        onTouchEnd={() => handleDrop(dragId)}
      >
        Drop here
      </div>
    </div>
        <Link to="/matematik">Matematik</Link>
      </section>
      {/* <div id="modal" className={countdown !== 5 ? 'modal' : 'hidden'}>
        <h2 className="red">{countdown}</h2></div> */}
    </main>
  )
}

export default Kemi