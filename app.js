const quiz = [
  {
    question = '床に落とした食べ物でも「すぐに拾えば大丈夫」というような意味で「3秒ルール」という言葉を使う人がいます。実際には落ちて何秒までなら拾って食べても大丈夫でしょうか？'
    answers = [
      '1秒',
      '5秒',
      '10秒',
      '落とした時点でアウト'
    ],
    correct = '落とした時点でアウト'
  },
  {
    question = 'お茶漬けの素に入っている「あられ」には、何の意味があるでしょうか?'
    answers = [
      '湿気予防のため',
      '食感が良いから',
      '香りが良いから',
      '色合いのため'
    ],
    correct = '湿気予防のため'
  },
  {
    question = 'ある高級ブランドがサッカーボールを作ったことがあります。どのブランドでしょうか？'
    answers = [
      'ルイヴィトン',
      'エルメス',
      'プラダ',
      'ロレックス'
    ],
    correct = 'ルイヴィトン'
  },
  {
    question = 'ことわざの「急がば回れ」の語源となったのはどこでしょうか？'
    answers = [
      '富士山',
      '鳥取砂丘',
      '清水寺',
      '琵琶湖'
    ],
    correct = '琵琶湖'
  },
  {
    question = '「地震、雷、火事、親父」と怖いものを順に並べた言葉があります。この「親父」は元々自然災害を表していたという説がありますが、それは一体何でしょうか？'
    answers = [
      '津波',
      '台風',
      '火山の噴火',
      '雪崩'
    ],
    correct = '台風'
  },
  {
    question = 'ペットボトルに水を入れた物を猫除けにしている方がいますが、実際の効果はどうでしょうか？'
    answers = [
      '猫の品種によって違う',
      '子猫だけには効く',
      '全ての猫に効く',
      '全く効かない'
    ],
    correct = '全く効かない'
  }
];


const $button = document.getElementsByTagName('button')  //HTMLの要素を変数として取るときには【$】を使ってあげるとわかりやすい
// 問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  };
};

setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent){
    window.alert('正解！');
  } 
  else {
    window.alert('不正解！');
  }
};

let handlerIndex = 0;
const buttonLength = $button.length;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};