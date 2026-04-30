import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export default function useKonamiCode(onSuccess) {
  const [input, setInput] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newInput = [...input, e.key].slice(-KONAMI_CODE.length);
      setInput(newInput);

      if (newInput.join(',') === KONAMI_CODE.join(',')) {
        onSuccess();
        setInput([]); // Reset
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input, onSuccess]);
}
