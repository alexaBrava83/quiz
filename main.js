/*All answer options*/
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

 /*All our options*/
const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'); // саме питання

const numberOfQuestion = document.getElementById('number-of-question'), // номер питання
      numberOfAllQuestions = document.getElementById('number-of-all-questions'); // кількість всіх питань

let indexOfQuestion, // індекс поточного питання
    indexOfPage = 0; // індекс сторінки

const answersTracker = document.getElementById('answers-tracker'); // обгортка для трекера
const btnNext = document.getElementById('btn-next'); // кнопка Далі

let score = 0; // кінцевий результат вікторини

const correctAnswer = document.getElementById('correct-answer'), // кількість правильних відповідей
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'), // кількість всіх питань в модальному вікні
      btnTryAgain = document.getElementById('btn-try-again'); // кнопка "почати вікторину спочатку"

const questions = [
    {
        question: 'Яким заклинанням Гаррі вбив лорда Волдеморта?',
        options: [
            'Експеліармус',
            'Expecto Patronum',
            'Авада Кедавра',
            'Accio',
        ],
        rightAnswer: 0
    },
    {
        question: 'На першому засіданні дуель-клубу Драко Малфой викликав яку тварину заклинанням «Serpensortia»?',
        options: [
            'Жаба',
            'дракон',
            'ведмідь',
            'Змія',
        ],
        rightAnswer: 3
    },
    {
        question: 'Який Патронус належить Луні Лавгуд?',
        options: [
            'Лань',
            'Кролик',
            'Пес',
            'Кінь',
        ],
        rightAnswer: 1
    },
    {
        question: 'Закінчіть напис на надгробку Доббі: «Тут лежить Добі ...',
        options: [
            "'Справжній друг'",
            "'Найкращий слуга'",
            "'Вільний ельф'",
            "'Майстер шкарпеток'",
        ],
        rightAnswer: 2
    },
    {
        question: 'Заклинання "Феліфорс" перетворює кота на що?',
        options: [
            'Капелюх',
            'Летюча миша',
            'Матч-скринька',
            'Котел',
        ],
        rightAnswer: 3
    },
    {
        question: 'Гілдерой Локхарт намагався використати "Brackium Emendo", щоб виправити зламані кістки Гаррі. Що це насправді з ним зробило?',
        options: [
            "Обернув ногу дерев'яною",
            "Видалив повністю його кістки",
            "Примусив його говорити парсельтонге",
            "Дав йому вишуканий співочий голос",
        ],
        rightAnswer: 1
    },
    {
        question: 'Хто написав серію із 7 книг під назвою «Стандартна книга заклинань»?',
        options: [
            "Кеннілуорсі Віпс",
            "Ріта Скітер",
            "Батільда ​​Багшот",
            "Міранда Гошок",
        ],
        rightAnswer: 3
    },
    {
        question: 'Який елемент асоціюється з Хаффлпаффом?',
        options: [
            "Пожежа",
            "Земля",
            "Air",
            "Вода",
        ],
        rightAnswer: 1
    },
    {
        question: 'Девіз якого будинку - «Дотепність - це найбільший скарб людини»?',
        options: [
            "Gryffindor",
            "Hufflepuff",
            "Ravenclaw",
            "Slytherin",
        ],
        rightAnswer: 2
    },
    {
        question: 'Як звали домашнього ельфа родини Чорних?',
        options: [
            "Доббі",
            "Вінки",
            "Кричер",
            "Хокей",
        ],
        rightAnswer: 0
    },
    {
        question: 'Що таке тестрал?',
        options: [
            "Напівгігант",
            "Невидимий крилатий кінь",
            "Сморщена голова",
            "Піксі",
        ],
        rightAnswer: 1
    },
    {
        question: 'Як звали тварину, яка виконувала роль стукача на ранніх іграх у квідич?',
        options: [
            "Золотий Снейкет",
            "Золотий Стонч",
            "Золотий Стейн",
            "Золотий Снітч",
        ],
        rightAnswer: 3
    },
    {
        question: 'Седрик Діггорі зіткнувся з якою породою драконів на турнірі "Тривізард"?',
        options: [
            "Шведська короткоморда",
            "Перуанський Vipertooth",
            "Звичайна валлійська зелена",
            "Норвезький риджбек",
        ],
        rightAnswer: 0
    },
    
];

numberOfAllQuestions.innerHTML = questions.length; // виводимо кількість питань

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; // саме питання

    // мапимо відповіді
    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1; // встановлення номера поточної сторінки
    indexOfPage++; //збільшення індекса сторінки
};

let completedAnswers = [] //масив для вже заданих питань

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false; // якір для перевірки однакових питань

    if(indexOfPage == questions.length) {
        quizOver()
    } else {
         if(completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if(item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate) { // = true
                randomQuestion();
            }else {
                indexOfQuestion = randomNumber;
                load();
            }
         }
         if(completedAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
         }
    }
    completedAnswers.push(indexOfQuestion);
};
 
const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

for(option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));

}

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
}

// Видалення всіх класів зі всіх відповідей
const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
}

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
    if(!optionElements[0].classList.contains('disabled')) {
        alert('Вам потрібно обрати один із варіантів відповіді!');
    } else {
        randomQuestion();
        enableOptions();
    }
}

const  quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

btnNext.addEventListener('click', () => {
    validate();
})

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
})

