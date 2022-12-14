import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ContextProvider } from './Components/utils/global.context';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/contact" element={ <Contact/> }/>
              <Route path="/dentist/:id" element={<Detail/>}/>
              <Route path="/favs" element={ <Favs/> }/>
              <Route index path="/home" element={ <Home/> }/>
            </Route>
          </Routes>
      </ContextProvider>
    </Router>
  </React.StrictMode>
);


