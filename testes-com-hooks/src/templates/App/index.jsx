import { useState } from 'react';
import { LazyComponent } from './lazy-component';

/* eslint-disable react/prop-types */
export const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>
        <button onClick={() => setShow((s) => !s)}>Show </button>
      </p>
      {show && <LazyComponent />}
    </div>
  );
};
