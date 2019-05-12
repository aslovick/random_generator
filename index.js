var goodluck = document.querySelector('.goodluck');
var badluck = document.querySelector('.badluck');
var ambivalent = document.querySelector('.ambivalent');
var messageSpace = document.querySelector('.message');

goodluck.addEventListener('click', goodMessage);
badluck.addEventListener('click', badMessage);
ambivalent.addEventListener('click', amMessage);

goodMessages = ['You will win the lottery!', 'Your dreams will be fulfilled!', 'Your future is bright! 🌟'];
badMessages = ['Better luck next time.', 'Your future is ominous..', 'Sorry, I cannot help you.'];
amMessages = ['Please try again.', 'Time for a new direction.', 'Keep your head up.'];

function goodMessage() {
  var num = Math.floor(Math.random() * goodMessages.length);
  var message = goodMessages[num];
  messageSpace.innerText = message;
}

function badMessage() {
  var num = Math.floor(Math.random() * badMessages.length);
  var message = badMessages[num];
  messageSpace.innerText = message;
}

function amMessage() {
  var num = Math.floor(Math.random() * amMessages.length);
  var message = amMessages[num];
  messageSpace.innerText = message;
}
