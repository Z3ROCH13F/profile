const buttonMain = document.querySelector('#button-main');
let x;
let $ = 0;
let time = 0;
let isAlertClicked = false;
let click = false;
let game1;

let main = () => {
  $++;
  if ($ == 1) {
    x = document.createElement('div');
    x.setAttribute('id','main');
    x.style.color = 'white';
    document.body.appendChild(x);
    
    game1 = document.createElement('div');
    game1.setAttribute('id','game1');
    game1.innerText = 'clickMe';
    game1.addEventListener('click', function() {
      window.location.href = 'game/';
    });
    x.appendChild(game1);
    
  } if ($ > 1) {
    x.parentNode.removeChild(x);
    $ = 0;
  }
};

setInterval(() => {
  if (time <= 10 && click == false) {
    time++;
  } if ($ > 0) {
    click = true;
  } if (time >= 10 && click == false && isAlertClicked == false) {
    alert("tekan image");
    isAlertClicked = true;
  }
}, 1000);

buttonMain.addEventListener('touchstart', () => {
  main();
});
