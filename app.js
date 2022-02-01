const question = '床に落とした食べ物でも「すぐに拾えば大丈夫」というような意味で「3秒ルール」という言葉を使う人がいます。実際には落ちて何秒までなら拾って食べても大丈夫でしょうか？'
const answers = [
  '1秒',
  '5秒',
  '10秒',
  '落とした時点でアウト'
];
const correct = '落とした時点でアウト';

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

$button[0].addEventListener('click', (e) => {
  clickHandler(e);
});

$button[1].addEventListener('click', (e) => {
  clickHandler(e);
});

$button[2].addEventListener('click', (e) => {
  clickHandler(e);
});

$button[3].addEventListener('click', (e) => {
  clickHandler(e);
});