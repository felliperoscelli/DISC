import React from 'react';
import { Link } from 'react-router-dom';

const PerfisComportamentais = () => {
  return (
    <div>
      <h1>Perfis Comportamentais</h1>
      <div className="content">
        <p>O método DISC é uma ferramenta poderosa para entender os diferentes perfis comportamentais. Através dele, podemos identificar e compreender melhor as características predominantes de cada indivíduo, facilitando a comunicação e a colaboração.</p>
        <Link to="/teste-disc">
          <button>Iniciar Teste DISC</button>
        </Link>
        <h3>Conheça os Perfis DISC:</h3>
        <div className="choice-container">
          <Link to="/perfil-dominante">
            <button className="choice-button">Dominante</button>
          </Link>
          <Link to="/perfil-influente">
            <button className="choice-button">Influente</button>
          </Link>
          <Link to="/perfil-estavel">
            <button className="choice-button">Estável</button>
          </Link>
          <Link to="/perfil-conformidade">
            <button className="choice-button">Conformidade</button>
          </Link>
        </div>
      </div>
      <Link to="/ferramentas">
        <button className="btn-back">Voltar</button>
      </Link>
    </div>
  );
};

export default PerfisComportamentais;
