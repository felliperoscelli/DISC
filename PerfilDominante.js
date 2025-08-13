import React from 'react';
import { Link } from 'react-router-dom';

const PerfilDominante = () => {
  return (
    <div>
      <h1>Perfil Dominante</h1>
      <div className="content">
        <h2>Como eles falam:</h2>
        <ul>
          <li>Perguntando "O quê?"</li>
          <li>Mandar vs Pedir</li>
          <li>Falam mais do que escutam</li>
          <li>Vão direto ao ponto</li>
          <li>Podem ser agressivos ou rudes</li>
          <li>Falam depressa</li>
          <li>Tom autoritário de controle</li>
          <li>Usam frases curtas e acrônimos</li>
          <li>Iniciam com suas opiniões</li>
        </ul>
        <h2>O que eles fazem:</h2>
        <ul>
          <li>Foco nas tarefas e resultados</li>
          <li>Impacientes</li>
          <li>Diretos, fortes, enérgicos</li>
          <li>Dispostos a causar problemas</li>
          <li>Conscientes do tempo e prazos</li>
          <li>Olho no olho</li>
          <li>Enfatizam suas próprias conquistas</li>
          <li>Confiam em seus instintos</li>
          <li>Inconformados</li>
        </ul>
        <h2>Você deve se esforçar para:</h2>
        <ul>
          <li>Falar brevemente/Ir direto ao ponto</li>
          <li>Respeitar seu gosto por autonomia</li>
          <li>Ser claro com as regras e expectativas</li>
          <li>Deixar que eles tomem a frente</li>
          <li>Mostrar sua competência</li>
          <li>Se manter no foco</li>
          <li>Mostrar independência</li>
        </ul>
        <h2>Esteja pronto para:</h2>
        <ul>
          <li>Abordagem brusca/exigente</li>
          <li>Falta de empatia</li>
          <li>Falta de sensibilidade</li>
          <li>Pouca interação social</li>
        </ul>
      </div>
      <Link to="/perfis-comportamentais">
        <button className="btn-back">Voltar</button>
      </Link>
    </div>
  );
};

export default PerfilDominante;
