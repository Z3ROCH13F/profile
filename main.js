
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
    document.body.appendChild(x);
    
    let game1 = document.createElement('div');
    game1.setAttribute('id','game1');
    x.appendChild(game1);
    
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