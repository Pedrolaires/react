import { useDebugValue, useEffect, useState } from 'react';

export const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState(false);

  // exibe na aba dos Components (útil no desenvolvimento)
  useDebugValue(`Query: ${queryValue}`, (name) => {
    return name + ' modificado';
  });

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);
    const handleChange = () => {
      if (!isMounted) return;
      setMatch(!!matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

//Exemplo:

export const App = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px');
  const small = useMediaQuery('(max-width: 321px)');
  const background = huge ? 'green' : big ? 'black' : medium ? 'pink' : 'blue';

  return (
    <>
      <h1 style={{ background }}>Oi</h1>
    </>
  );
};
