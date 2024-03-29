import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './composants/Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
 import Banner from './composants/Banner';
import  PageAccueil  from './pages/PageAccueil';
import Apropos from './pages/Apropos';
import { PageErreur } from './pages/PageErreur';
import { Link } from 'react-router-dom';
import { Footer } from './composants/Footer';
import { Logement } from './pages/Logement';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     < Header />
    <Routes>
       <Route path="/" element = {< PageAccueil /> }> </Route>
       <Route path="/apropos" element = {< Apropos /> }> </Route>
    
       <Route path="/erreur" element = {< PageErreur /> }> </Route>
 
       <Route path="/logement/:id" element = {< Logement /> }> </Route>
  
       <Route path="*" element = {< PageErreur /> }> </Route>
     </Routes>
     < Footer />
     {/*  <Routes>
       <Route path = "/contact" element = {< Contact /> }> </Route>
     </Routes>
     <Routes>
       <Route path = "/apropos" element = {< Apropo /> }> </Route>
     </Routes>
     <Routes>
       <Route path = "/activite" element = {< Activite /> }> </Route>
     </Routes>
     <Routes>
       <Route path = "/programmesemaine" element = {< ProgrammeSemaine/> }> </Route>
     </Routes>
     <Routes>
       <Route path = "/projet" element = {< Projet/> }> </Route>
     </Routes> */}
     </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
