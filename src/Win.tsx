import JSConfetti from 'js-confetti'

function Win() {
  const jsConfetti = new JSConfetti()

  const handleButtonClick = () => {
    jsConfetti.addConfetti()
  }

  return <div>Finish
    <button className="button" onClick={handleButtonClick}>Konfetti</button>
  </div>;
}

export default Win