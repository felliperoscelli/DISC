import React from 'react';
import { Link } from 'react-router-dom';

const PerfilInfluente = () => {
  return (
    <div>
      <h1>Perfil Influente</h1>
      <div className="content">
        <h2>Como eles falam:</h2>
        <ul>
          <li>Perguntando "Quem?"</li>
          <li>Dizer vs Pedir</li>
          <li>Falam bastante</li>
          <li>Fazem rodeios e falam lateralmente</li>
          <li>Utilizam estórias, metáforas e piadas</li>
          <li>Falam mais rápido</li>
          <li>Expressam seus sentimentos</li>
          <li>Compartilham emoções pessoais</li>
          <li>Exageram</li>
        </ul>
        <h2>O que eles fazem:</h2>
        <ul>
          <li>São animados</li>
          <li>Muitas expressões faciais</li>
          <li>São espontâneos</li>
          <li>Riem alto</li>
          <li>Se vestem com estilo</li>
          <li>Se distraem com facilidade</li>
          <li>Calorosos</li>
          <li>Podem se aproximar bastante do espaço pessoal dos outros</li>
        </ul>
        <h2>Você deve se esforçar para:</h2>
        <ul>
          <li>Ser informal</li>
          <li>Relaxar e ser sociável</li>
          <li>Deixar que saibam como se sente</li>
          <li>Manter a conversa leve</li>
          <li>Fornecer detalhes POR ESCRITO</li>
          <li>Reconhecê-los em público</li>
          <li>Utilizar bom humor</li>
        </ul>
        <h2>Esteja pronto para:</h2>
        <ul>
          <li>Tentativas de persuadir/influenciar</li>
          <li>Necessidade de ser o centro das atenções</li>
          <li>Superestimar a si e aos outros</li>
          <li>Ideias mirabolantes e exagero</li>
          <li>Vulnerabilidade à rejeição</li>
        </ul>
      </div>
      <Link to="/perfis-comportamentais">
        <button className="btn-back">Voltar</button>
      </Link>
    </div>
  );
};

export default PerfilInfluente;
