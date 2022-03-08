import { useEffect } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';
import './styles.css';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClicked={actions.increase} text="Increase" />
        <Button onButtonClicked={actions.decrease} text="Decrease" />
        <Button onButtonClicked={actions.reset} text="Reset" />
        <Button onButtonClicked={() => actions.setCounter({ counter: 10 })} text="Set 10" />
        <Button onButtonClicked={() => actions.setCounter({ counter: 100 })} text="Set 100" />
        <Button disabled={state.loading} onButtonClicked={actions.asyncIncrease} text="Async Increase" />
        <Button disabled={state.loading} onButtonClicked={handleError} text="Async Error" />
      </div>
    </div>
  );
};
