import React from 'react';
import { Link } from 'react-router-dom';

const PerfilConformidade = () => {
  return (
    <div>
      <h1>Perfil Conformidade</h1>
      <div className="content">
        <h2>Como eles falam:</h2>
        <ul>
          <li>Perguntando "Por que?"</li>
          <li>Pedir vs Dizer</li>
          <li>Escutam mais que falam</li>
          <li>Sem muitas reações</li>
          <li>Falam pausadamente</li>
          <li>Falam com volume mais baixo</li>
          <li>Preferem escrever a falar</li>
          <li>Vão ao ponto mas gostam de falar</li>
          <li>Discurso detalhado e preciso</li>
        </ul>
        <h2>O que eles fazem:</h2>
        <ul>
          <li>Foco nas tarefas e processos</li>
          <li>Ordenados</li>
          <li>Meticulosos</li>
          <li>Precisos e exatos</li>
          <li>Área de trabalho "limpa e organizada"</li>
          <li>Conscientes do tempo e prazos</li>
          <li>Difíceis de serem "lidos"</li>
          <li>Diplomáticos</li>
          <li>Querem estar certos</li>
        </ul>
        <h2>Você deve se esforçar para:</h2>
        <ul>
          <li>Prover explicações claras e prazos</li>
          <li>Demonstrar confiança</li>
          <li>Demonstrar lealdade</li>
          <li>Ser discreto e reservado</li>
          <li>Honrar os procedimentos e fontes</li>
          <li>Ser preciso e focado</li>
          <li>Dar valor a altos padrões</li>
        </ul>
        <h2>Esteja pronto para:</h2>
        <ul>
          <li>Desconforto com ambiguidades</li>
          <li>Resistência a informações vagas</li>
          <li>Desejo de conferir novamente</li>
          <li>Pouca necessidade de estar com outras pessoas</li>
        </ul>
      </div>
      <Link to="/perfis-comportamentais">
        <button className="btn-back">Voltar</button>
      </Link>
    </div>
  );
};

export default PerfilConformidade;
