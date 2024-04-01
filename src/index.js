import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App /> 
  </React.StrictMode>
);

// Si vous voulez commencer à mesurer la performance dans votre application, passez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyer à un point de terminaison d’analyse. Pour en savoir plus : https://bit.ly/CRA-vitals

reportWebVitals();


// // Force cette mise à jour d’état à être synchrone.
// flushSync() => {
//   setCount(compte + 1);
// });
 // // À ce stade, DOM est mis à jour.