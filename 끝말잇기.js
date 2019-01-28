document.body;

var word = ‘구글’

while (true) {
  var answer = promp(word);
  if (word[word.length - 1] === answer[0]) {
  alert (‘통과하다니 강한자식’);
  word = answer;
  } else {
  alert(‘이걸 모른다고........?’);
  }
}
