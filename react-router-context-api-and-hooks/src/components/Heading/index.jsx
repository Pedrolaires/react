import { useCounterContext } from '../../contexts/CounterContext';

export const Heading = () => {
  const [state, actions] = useCounterContext();
  return <h1 style={{ margin: '5px' }}>Counter: {state.counter}</h1>;
};
