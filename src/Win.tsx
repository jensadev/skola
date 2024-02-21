import JSConfetti from 'js-confetti'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Win() {
  const location = useLocation();
  const [name, setName] = useState('');

  useEffect(() => {
    const jsConfetti = new JSConfetti()
    const params = new URLSearchParams(location.search);
    const name = params.get('namn');
    if (name && name.length > 2 && /^[a-zA-Z]+$/.test(name)) {
      jsConfetti.addConfetti();
      setName(name);
    }

    const intervalId = setInterval(() => {
      jsConfetti.addConfetti();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [location]);


  return <main className='wrapper'>The end for {name}!</main>;
}

export default Win