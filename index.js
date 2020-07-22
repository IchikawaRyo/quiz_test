const quiz = [
    {
        question: '道をふさいでいる動物たち。どいてくれたのは次のうちどれ？',
        answer: [
            'ライオン',
            'コブラ',
            'イノシシ',
            'クマ'
        ],
        correct: 'コブラ',
        reason: '（正解：コブラ）コブラは毒ヘビ→（道を）どくヘビ'
    }, 
    {
        question: 'パン作りのオリンピック。優勝したのは次のうちだれ？',
        answer: [
            '東の町のパン職人',
            '西の町のパン職人',
            '南の町のパン職人',
            '北の町のパン職人'
        ],
        correct: '東の町のパン職人',
        reason: '（正解：東の町のパン職人）イースト菌→イースト（東）菌（金）'
     },
     {
        question: 'パソコンのキーボードが壊れてしまい、作業ができなくなったしまった。さてどのキーが壊れた？',
        answer: [
            'A',
            'S',
            'Enter',
            'Shift'
        ],
        correct: 'S',
        reason: '（正解：S）作業ができない→さ行ができない'
      },
      {
        question: 'ある調味料のビンを連打し続けたら痩せました。さてなんの調味料？',
        answer: [
            '醤油',
            'みりん',
            'ラー油',
            '酢'
        ],
        correct: '酢',
        reason: '（正解：酢）酢を連打→スレンダー'  
      },
      {
        question: '出口には１つ。非常口には２つ。脱出口には４つ。さて避難口にはいくつ？',
        answer: [
            '５',
            '７',
            '９',
            '１１'
        ],
        correct: '９',
        reason: '（正解：９）「口」の数　避→３、難→５、口→１'
      }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//何番目のボタンかを指定
const $button = document.getElementsByTagName('button');
const ButtonLength = $button.length;

// クイズの問題、選択肢を表示
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let ButtonIndex = 0;
    while(ButtonIndex < ButtonLength) {
    $button[ButtonIndex].textContent = quiz[quizIndex].answer[ButtonIndex];
    ButtonIndex++;
    }
};
setupQuiz();

// ボタンをクリックした時の正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        alert('正解！');
        score++;
    } else {
        alert('残念！');
    }

    document.getElementById('reason').textContent = quiz[quizIndex].reason;

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        alert('クイズ終了！正解数は' + quizLength + '問中' + score + '問です！');
    }
};

let handlerIndex = 0;
while (handlerIndex < ButtonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};



