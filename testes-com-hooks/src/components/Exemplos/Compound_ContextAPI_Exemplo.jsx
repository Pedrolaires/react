/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

/*
 * Exemplo do padrão Compound com context API
 */

const s = {
  style: {
    fontSize: '1.5em',
    background: '#000',
    color: '#fff',
  },
};

//Criamos um contexto para passar as props para os componentes filhos, não importando se há algum elemento jsx entre eles.
const TurnOnOffContext = createContext();

//Componente Provider que cria o estado e os provê para os childrens através do contexto.
const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const onTurn = () => setIsOn((s) => !s);
  return <TurnOnOffContext.Provider value={{ isOn, onTurn }}>{children}</TurnOnOffContext.Provider>;
};

const TurnedOn = ({ children }) => {
  //Componente recebendo do contexto para realizar algo.
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};

const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return (
    <button {...s} onClick={onTurn}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

const P = ({ children }) => <p {...s}>{children}</p>;

export const App = () => {
  return (
    <TurnOnOff>
      <div>
        <p>Oi</p>
        <TurnedOn>
          <P>O que acontece quando estiver ON.</P>
        </TurnedOn>
        <TurnedOff>
          <P>O que acontece quando estiver OFF</P>
        </TurnedOff>
        <TurnButton {...s} />
      </div>
    </TurnOnOff>
  );
};
