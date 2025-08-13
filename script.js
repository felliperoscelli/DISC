// Perguntas do teste DISC
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

// Estado do teste
let currentQuestion = 0;
let scores = { Dominancia: 0, Influencia: 0, Estabilidade: 0, Conformidade: 0 };
let showResult = false;

// Função para mostrar uma página específica
function showPage(pageId) {
    // Esconder todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Mostrar a página solicitada
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Se for a página do teste, inicializar o teste
    if (pageId === 'teste-disc') {
        initializeTest();
    }
}

// Função para inicializar o teste
function initializeTest() {
    currentQuestion = 0;
    scores = { Dominancia: 0, Influencia: 0, Estabilidade: 0, Conformidade: 0 };
    showResult = false;
    
    document.getElementById('test-content').style.display = 'block';
    document.getElementById('results-content').style.display = 'none';
    
    displayCurrentQuestion();
}

// Função para exibir a pergunta atual
function displayCurrentQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionCounter = document.getElementById('question-counter');
    
    const totalQuestions = questions.length / 4;
    questionCounter.textContent = `Escolha apenas uma alternativa (Pergunta ${currentQuestion + 1} de ${Math.ceil(totalQuestions)})`;
    
    const currentQuestionIndex = currentQuestion * 4;
    const currentQuestionSet = questions.slice(currentQuestionIndex, currentQuestionIndex + 4);
    
    questionContainer.innerHTML = '';
    
    currentQuestionSet.forEach((item, index) => {
        const button = document.createElement('button');
        button.className = 'choice-button';
        button.textContent = item.labels[0];
        button.onclick = () => handleAnswerOptionClick(item.choices[0]);
        questionContainer.appendChild(button);
    });
}

// Função para lidar com a resposta selecionada
function handleAnswerOptionClick(choice) {
    // Atualizar pontuações
    if (choice === 1) scores.Dominancia += 1;
    if (choice === 2) scores.Influencia += 1;
    if (choice === 3) scores.Estabilidade += 1;
    if (choice === 4) scores.Conformidade += 1;
    
    const nextQuestion = currentQuestion + 1;
    const totalQuestions = questions.length / 4;
    
    if (nextQuestion < totalQuestions) {
        currentQuestion = nextQuestion;
        displayCurrentQuestion();
    } else {
        showResults();
    }
}

// Função para exibir os resultados
function showResults() {
    document.getElementById('test-content').style.display = 'none';
    document.getElementById('results-content').style.display = 'block';
    
    // Determinar perfil predominante
    const maxProfiles = getMaxProfiles();
    document.getElementById('dominant-profile').textContent = `Perfil Predominante: ${maxProfiles.join(', ')}`;
    
    // Criar gráfico
    createChart();
}

// Função para obter os perfis com maior pontuação
function getMaxProfiles() {
    const maxScore = Math.max(scores.Dominancia, scores.Influencia, scores.Estabilidade, scores.Conformidade);
    let maxProfiles = [];
    
    if (scores.Dominancia === maxScore) maxProfiles.push('Dominância');
    if (scores.Influencia === maxScore) maxProfiles.push('Influência');
    if (scores.Estabilidade === maxScore) maxProfiles.push('Estabilidade');
    if (scores.Conformidade === maxScore) maxProfiles.push('Conformidade');
    
    return maxProfiles;
}

// Função para criar o gráfico de barras
function createChart() {
    const chartContainer = document.getElementById('chart-container');
    const total = scores.Dominancia + scores.Influencia + scores.Estabilidade + scores.Conformidade;
    
    const data = [
        { label: 'Dominância', value: scores.Dominancia, class: 'dominancia' },
        { label: 'Influência', value: scores.Influencia, class: 'influencia' },
        { label: 'Estabilidade', value: scores.Estabilidade, class: 'estabilidade' },
        { label: 'Conformidade', value: scores.Conformidade, class: 'conformidade' }
    ];
    
    chartContainer.innerHTML = '';
    
    data.forEach(item => {
        const percentage = total > 0 ? (item.value / total) * 100 : 0;
        
        const barContainer = document.createElement('div');
        barContainer.className = 'chart-bar';
        
        const label = document.createElement('div');
        label.className = 'chart-label';
        label.innerHTML = `<span>${item.label}</span><span>${item.value} (${percentage.toFixed(1)}%)</span>`;
        
        const progress = document.createElement('div');
        progress.className = 'chart-progress';
        
        const fill = document.createElement('div');
        fill.className = `chart-fill ${item.class}`;
        fill.style.width = '0%';
        
        progress.appendChild(fill);
        barContainer.appendChild(label);
        barContainer.appendChild(progress);
        chartContainer.appendChild(barContainer);
        
        // Animar a barra
        setTimeout(() => {
            fill.style.width = `${percentage}%`;
        }, 100);
    });
}

// Inicializar a aplicação
document.addEventListener('DOMContentLoaded', function() {
    showPage('home-page');
});

