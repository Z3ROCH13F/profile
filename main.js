
let x;
let $ = 0;
let time = 0;
let isAlertClicked = false;
let click = false;

function main() {
  $++;
  if ($ == 1) {
    x = document.createElement('div');
    x.setAttribute('id','main');
    x.style.color = 'white';
    x.textContent = '\f' + '#belum siap bruh!' + '\u{1F5ff}';
    document.body.appendChild(x);
  } if ($ > 1) {
    x.parentNode.removeChild(x);
    $ = 0;
  }
}

(function loop() {
  if ($ > 0) {
    click = true;
  }
  if (time <= 300 && click == false) {
    time++;
  }
  if (time > 300 && $ >= 0 && !isAlertClicked) {
    alert("tekan image");
    isAlertClicked = true;
  }
  requestAnimationFrame(loop);
})();