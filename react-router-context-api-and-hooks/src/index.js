import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { CounterContextProvider } from './contexts/CounterContext';
import './styles/global-styles.css';
import { Abc } from './templates/Abc';
import { Home } from './templates/home';
import { Page404 } from './templates/Page404';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/abc" element={<Abc />}>
            <Route path=":slug" element={<Abc />}>
              <Route path=":id" element={<Abc />} />
            </Route>
          </Route>
          <Route path="/" element={<Home />} exact />
          <Route path="*" element={<Page404 />} exact />
        </Routes>
      </BrowserRouter>
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
