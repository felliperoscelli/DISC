import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Teste de Perfis Comportamentais DISC</h1>
      <p>
        Este teste ajudará você a descobrir seu perfil dominante. Responda cada
        pergunta com sinceridade, escolhendo a palavra com que você mais se
        identifica.
      </p>
      <Link to="/teste-disc" className="start-button">Iniciar Teste</Link>
    </div>
  );
};

export default Home;
