const question = '床に落とした食べ物でも「すぐに拾えば大丈夫」というような意味で「3秒ルール」という言葉を使う人がいます。実際には落ちて何秒までなら拾って食べても大丈夫でしょうか？'
const answers = [
  '1秒',
  '5秒',
  '10秒',
  '落とした時点でアウト'
];
const correct = '落とした時点でアウト';

document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button')  //HTMLの要素を変数として取るときには【$】を使ってあげるとわかりやすい

let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = answers[buttonIndex];
  buttonIndex++;
}

$button[0].addEventListener('click', () => {
  if (correct === $button[0].textContent){
    window.alert('正解！');
  } 
  else {
    window.alert('不正解！');
  }
});

$button[1].addEventListener('click', () => {
  if (correct === $button[1].textContent){
    window.alert('正解！');
  } 
  else {
    window.alert('不正解！');
  }
});

$button[2].addEventListener('click', () => {
  if (correct === $button[2].textContent){
    window.alert('正解！');
  } 
  else {
    window.alert('不正解！');
  }
});

$button[3].addEventListener('click', () => {
  if (correct === $button[3].textContent){
    window.alert('正解！');
  } 
  else {
    window.alert('不正解！');
  }
});