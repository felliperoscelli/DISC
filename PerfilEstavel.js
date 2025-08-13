import React from 'react';
import { Link } from 'react-router-dom';

const PerfilEstavel = () => {
  return (
    <div>
      <h1>Perfil Estabilidade</h1>
      <div className="content">
        <h2>Como eles falam:</h2>
        <ul>
          <li>Perguntando "Como?"</li>
          <li>Falam pouco</li>
          <li>Pedir vs Dizer</li>
          <li>Escutam mais do que falam</li>
          <li>De forma mais lenta e constante</li>
          <li>Reservados quanto às suas opiniões</li>
          <li>Volume mais baixo</li>
          <li>Tom de gentileza na voz</li>
          <li>Utilizam o primeiro nome</li>
        </ul>
        <h2>O que eles fazem:</h2>
        <ul>
          <li>Têm fotos de pessoas queridas</li>
          <li>Consultam aos outros</li>
          <li>Espaço de trabalho aconchegante e funcional</li>
          <li>Caminham de forma mais calma</li>
          <li>Pacientes e tolerantes</li>
          <li>Orientados a serviços e prestativos</li>
          <li>Se encabulam quando reconhecidos</li>
          <li>Se vestem mais casualmente</li>
        </ul>
        <h2>Você deve se esforçar para:</h2>
        <ul>
          <li>Ser calmo e sistemático</li>
          <li>Providenciar um ambiente seguro</li>
          <li>Comunicar mudanças com antecedência</li>
          <li>Dar valor de forma sincera</li>
          <li>Demonstrar como são importantes</li>
          <li>Deixar que mudem aos poucos</li>
        </ul>
        <h2>Esteja pronto para:</h2>
        <ul>
          <li>Aproximação amistosa</li>
          <li>Resistência a mudanças</li>
          <li>Dificuldade em encontrar prioridades</li>
          <li>Dificuldade com prazos</li>
        </ul>
      </div>
      <Link to="/perfis-comportamentais">
        <button className="btn-back">Voltar</button>
      </Link>
    </div>
  );
};

export default PerfilEstavel;
