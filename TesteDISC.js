import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import './TesteDISC.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend); // Importando o arquivo CSS

const questions = [
  { question: "1- Determinado", choices: [1], labels: ["Determinado"] },
  { question: "2- Confiável", choices: [2], labels: ["Confiável"] },
  { question: "3- Consistente", choices: [3], labels: ["Consistente"] },
  { question: "4- Preciso", choices: [4], labels: ["Preciso"] },
  { question: "1- Apressado", choices: [1], labels: ["Apressado"] },
  { question: "2- Persuasivo", choices: [2], labels: ["Persuasivo"] },
  { question: "3- Metódico", choices: [3], labels: ["Metódico"] },
  { question: "4- Cuidadoso", choices: [4], labels: ["Cuidadoso"] },
  { question: "1- Competitivo", choices: [1], labels: ["Competitivo"] },
  { question: "2- Político", choices: [2], labels: ["Político"] },
  { question: "3- Cooperativo", choices: [3], labels: ["Cooperativo"] },
  { question: "4- Diplomata", choices: [4], labels: ["Diplomata"] },
  { question: "1- Objetivo", choices: [1], labels: ["Objetivo"] },
  { question: "2- Exagerado", choices: [2], labels: ["Exagerado"] },
  { question: "3- Estável", choices: [3], labels: ["Estável"] },
  { question: "4- Exato", choices: [4], labels: ["Exato"] },
  { question: "1- Assertivo", choices: [1], labels: ["Assertivo"] },
  { question: "2- Otimista", choices: [2], labels: ["Otimista"] },
  { question: "3- Paciente", choices: [3], labels: ["Paciente"] },
  { question: "4- Prudente", choices: [4], labels: ["Prudente"] },
  { question: "1- Fazedor", choices: [1], labels: ["Fazedor"] },
  { question: "2- Inspirador", choices: [2], labels: ["Inspirador"] },
  { question: "3- Persistente", choices: [3], labels: ["Persistente"] },
  { question: "4- Perfeccionista", choices: [4], labels: ["Perfeccionista"] },
  { question: "1- Agressivo", choices: [1], labels: ["Agressivo"] },
  { question: "2- Expansivo", choices: [2], labels: ["Expansivo"] },
  { question: "3- Possessivo", choices: [3], labels: ["Possessivo"] },
  { question: "4- Julgador", choices: [4], labels: ["Julgador"] },
  { question: "1- Decidido", choices: [1], labels: ["Decidido"] },
  { question: "2- Flexível", choices: [2], labels: ["Flexível"] },
  { question: "3- Previsível", choices: [3], labels: ["Previsível"] },
  { question: "4- Sistemático", choices: [4], labels: ["Sistemático"] },
  { question: "1- Inovador", choices: [1], labels: ["Inovador"] },
  { question: "2- Comunicativo", choices: [2], labels: ["Comunicativo"] },
  { question: "3- Agradável", choices: [3], labels: ["Agradável"] },
  { question: "4- Elegante", choices: [4], labels: ["Elegante"] },
  { question: "1- Autoritário", choices: [1], labels: ["Autoritário"] },
  { question: "2- Extravagante", choices: [2], labels: ["Extravagante"] },
  { question: "3- Modesto", choices: [3], labels: ["Modesto"] },
  { question: "4- Desconfiado", choices: [4], labels: ["Desconfiado"] },
  { question: "1- Enérgico", choices: [1], labels: ["Enérgico"] },
  { question: "2- Entusiasmado", choices: [2], labels: ["Entusiasmado"] },
  { question: "3- Calmo", choices: [3], labels: ["Calmo"] },
  { question: "4- Disciplinado", choices: [4], labels: ["Disciplinado"] },
  { question: "1- Firme", choices: [1], labels: ["Firme"] },
  { question: "2- Expressivo", choices: [2], labels: ["Expressivo"] },
  { question: "3- Amável", choices: [3], labels: ["Amável"] },
  { question: "4- Formal", choices: [4], labels: ["Formal"] },
  { question: "1- Visionário", choices: [1], labels: ["Visionário"] },
  { question: "2- Criativo", choices: [2], labels: ["Criativo"] },
  { question: "3- Ponderado", choices: [3], labels: ["Ponderado"] },
  { question: "4- Detalhista", choices: [4], labels: ["Detalhista"] },
  { question: "1- Egocêntrico", choices: [1], labels: ["Egocêntrico"] },
  { question: "2- Tagarela", choices: [2], labels: ["Tagarela"] },
  { question: "3- Acomodado", choices: [3], labels: ["Acomodado"] },
  { question: "4- Retraído", choices: [4], labels: ["Retraído"] },
  { question: "1- Inspira Confiança", choices: [1], labels: ["Inspira Confiança"] },
  { question: "2- Convincente", choices: [2], labels: ["Convincente"] },
  { question: "3- Compreensivo", choices: [3], labels: ["Compreensivo"] },
  { question: "4- Pontual", choices: [4], labels: ["Pontual"] },
  { question: "1- Intimidante", choices: [1], labels: ["Intimidante"] },
  { question: "2- Sem Cerimônia", choices: [2], labels: ["Sem Cerimônia"] },
  { question: "3- Reservado", choices: [3], labels: ["Reservado"] },
  { question: "4- Intransigente", choices: [4], labels: ["Intransigente"] },
  { question: "1- Vigoroso", choices: [1], labels: ["Vigoroso"] },
  { question: "2- Caloroso", choices: [2], labels: ["Caloroso"] },
  { question: "3- Gentil", choices: [3], labels: ["Gentil"] },
  { question: "4- Preocupado", choices: [4], labels: ["Preocupado"] },
  { question: "1- Ousado", choices: [1], labels: ["Ousado"] },
  { question: "2- Sedutor", choices: [2], labels: ["Sedutor"] },
  { question: "3- Harmonizador", choices: [3], labels: ["Harmonizador"] },
  { question: "4- Cauteloso", choices: [4], labels: ["Cauteloso"] },
  { question: "1- Força de Vontade", choices: [1], labels: ["Força de Vontade"] },
  { question: "2- Espontâneo", choices: [2], labels: ["Espontâneo"] },
  { question: "3- Satisfeito", choices: [3], labels: ["Satisfeito"] },
  { question: "4- Conservador", choices: [4], labels: ["Conservador"] },
  { question: "1- Exigente", choices: [1], labels: ["Exigente"] },
  { question: "2- Sociável", choices: [2], labels: ["Sociável"] },
  { question: "3- Leal", choices: [3], labels: ["Leal"] },
  { question: "4- Rigoroso", choices: [4], labels: ["Rigoroso"] },
  { question: "1- Pioneiro", choices: [1], labels: ["Pioneiro"] },
  { question: "2- Divertido", choices: [2], labels: ["Divertido"] },
  { question: "3- Tranquilo", choices: [3], labels: ["Tranquilo"] },
  { question: "4- Convencional", choices: [4], labels: ["Convencional"] },
  { question: "1- Ambicioso", choices: [1], labels: ["Ambicioso"] },
  { question: "2- Radiante", choices: [2], labels: ["Radiante"] },
  { question: "3- Regulador", choices: [3], labels: ["Regulador"] },
  { question: "4- Calculista", choices: [4], labels: ["Calculista"] },
  { question: "1- Inquisitivo", choices: [1], labels: ["Inquisitivo"] },
  { question: "2- Oferecido", choices: [2], labels: ["Oferecido"] },
  { question: "3- Rígido Consigo", choices: [3], labels: ["Rígido Consigo"] },
  { question: "4- Cético", choices: [4], labels: ["Cético"] },
  { question: "1- Audacioso", choices: [1], labels: ["Audacioso"] },
  { question: "2- Extrovertido", choices: [2], labels: ["Extrovertido"] },
  { question: "3- Casual", choices: [3], labels: ["Casual"] },
  { question: "4- Meticuloso", choices: [4], labels: ["Meticuloso"] },
  { question: "1- Direto", choices: [1], labels: ["Direto"] },
  { question: "2- Prolixo", choices: [2], labels: ["Prolixo"] },
  { question: "3- Moderado", choices: [3], labels: ["Moderado"] },
  { question: "4- Processual", choices: [4], labels: ["Processual"] },
];

const TesteDISC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ Dominancia: 0, Influencia: 0, Estabilidade: 0, Conformidade: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (choice) => {
    const newScores = { ...scores };
    if (choice === 1) newScores.Dominancia += 1;
    if (choice === 2) newScores.Influencia += 1;
    if (choice === 3) newScores.Estabilidade += 1;
    if (choice === 4) newScores.Conformidade += 1;
    setScores(newScores);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion * 4 < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const getMaxProfiles = () => {
    const maxScore = Math.max(scores.Dominancia, scores.Influencia, scores.Estabilidade, scores.Conformidade);
    let maxProfiles = [];
    if (scores.Dominancia === maxScore) maxProfiles.push('Dominancia');
    if (scores.Influencia === maxScore) maxProfiles.push('Influencia');
    if (scores.Estabilidade === maxScore) maxProfiles.push('Estabilidade');
    if (scores.Conformidade === maxScore) maxProfiles.push('Conformidade');
    return maxProfiles;
  };

  const currentQuestionIndex = currentQuestion * 4;
  const currentQuestionSet = questions.slice(currentQuestionIndex, currentQuestionIndex + 4);

  const data = {
    labels: [
      `Dominância (${scores.Dominancia})`,
      `Influência (${scores.Influencia})`,
      `Estabilidade (${scores.Estabilidade})`,
      `Conformidade (${scores.Conformidade})`,
    ],
    datasets: [
      {
        label: 'Pontuação',
        data: [scores.Dominancia, scores.Influencia, scores.Estabilidade, scores.Conformidade],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h1>Resultados</h1>
          <h2>Perfil Predominante: {getMaxProfiles().join(', ')}</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '50%', height: '400px' }}>
              <Pie data={data} options={options} />
            </div>
          </div>
          <div className="content">
            <h3>Conheça os Perfis DISC:</h3>
            <div>
              <Link to="/perfil-dominante">
                <button>Dominante</button>
              </Link>
              <Link to="/perfil-influente">
                <button>Influente</button>
              </Link>
              <Link to="/perfil-estavel">
                <button>Estável</button>
              </Link>
              <Link to="/perfil-conformidade">
                <button>Conformidade</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Teste DISC</h1>
          <p>Escolha apenas uma alternativa</p>
          <div className="choice-container">
            {currentQuestionSet.map((item, index) => (
              <button
                key={index}
                className="choice-button"
                onClick={() => handleAnswerOptionClick(item.choices[0])}
              >
                {item.labels[0]}
              </button>
            ))}
          </div>
        </div>
      )}
      <Link to="/perfis-comportamentais">
        <button className="btn-back">Voltar</button>
      </Link>
    </div>
  );
};

export default TesteDISC;
