document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionCountNav = document.getElementById('question-count');
    const scoreDisplay = document.getElementById('score-display');
    const progressBar = document.getElementById('progress');
    const finalScoreSpan = document.getElementById('final-score');
    const resultMessage = document.getElementById('result-message');

    // Game State
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    const TOTAL_QUESTIONS = 15;
    let isAnsweringDisabled = false;

    // Initialize
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        // Reset state
        score = 0;
        currentQuestionIndex = 0;
        isAnsweringDisabled = false;
        
        // Prepare questions
        // 1. Shuffle all questions
        const shuffledAll = [...questions].sort(() => 0.5 - Math.random());
        // 2. Select first 15 (or less if not enough)
        currentQuestions = shuffledAll.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));
        
        // Show Quiz Screen
        startScreen.classList.add('hidden');
        resultScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        
        loadQuestion();
    }

    function loadQuestion() {
        isAnsweringDisabled = false;
        const currentData = currentQuestions[currentQuestionIndex];
        
        // Update UI info
        questionCountNav.textContent = `Savol: ${currentQuestionIndex + 1}/${currentQuestions.length}`;
        scoreDisplay.textContent = `To'g'ri: ${score}`;
        const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        // Set Question Text
        questionText.textContent = currentData.question;
        
        // Prepare Options
        optionsContainer.innerHTML = '';
        
        // Shuffle options for this question
        // Note: currentData.options is Array of strings.
        // currentData.correctAnswer is the string of the correct answer.
        const shuffledOptions = [...currentData.options].sort(() => 0.5 - Math.random());
        
        shuffledOptions.forEach(optText => {
            const btn = document.createElement('div');
            btn.className = 'option-btn';
            btn.textContent = optText;
            btn.addEventListener('click', () => selectAnswer(btn, optText, currentData.correctAnswer));
            optionsContainer.appendChild(btn);
        });
    }

    function selectAnswer(selectedBtn, selectedText, correctText) {
        if (isAnsweringDisabled) return; // Prevent double clicking
        isAnsweringDisabled = true;
        
        const isCorrect = selectedText === correctText;
        
        if (isCorrect) {
            score++;
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('incorrect');
            // Highlight the correct one
            const buttons = optionsContainer.querySelectorAll('.option-btn');
            buttons.forEach(btn => {
                if (btn.textContent === correctText) {
                    btn.classList.add('correct');
                }
            });
        }
        
        // Update Score UI immediately for feedback
        scoreDisplay.textContent = `To'g'ri: ${score}`;
        
        // Wait and go to next
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 1200);
    }

    function showResults() {
        quizScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        
        finalScoreSpan.textContent = score;
        
        // Custom message
        const percentage = (score / currentQuestions.length) * 100;
        if (percentage >= 80) {
            resultMessage.textContent = "Ajoyib natija! Siz haqiqiy ekspersiz.";
        } else if (percentage >= 50) {
            resultMessage.textContent = "Yaxshi natija, lekin hali o'rganish kerak.";
        } else {
            resultMessage.textContent = "Ko'proq o'qishingiz kerak ekan.";
        }
    }
});
