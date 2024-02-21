import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

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

      const timestamp = new Date().getTime();
      localStorage.setItem('endTimestamp', timestamp.toString());
    }

    const intervalId = setInterval(() => {
      props.triggerConfetti({ emojis: ['🦄'], confettiRadius: 100, confettiNumber: 30 })
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [location, props]);


  return <main className='wrapper'>The end for {name}!</main>;
}

export default Win