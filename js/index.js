//////////////////////////////////////////////// Stop Watch ////////////////////////////////////////////////

const [...timerDigits] = document.querySelectorAll('.stopwatch-display > span');
const [...timerButtons] = document.querySelectorAll('.stopwatch-control > button');
const mainContainer = document.querySelector('.container-stopwatch');
const body = document.querySelector('body');


let timerCounter = [0, 0, 0],
  timerInterval,
  currentClassList = 'black';

const stopWatchCouner = () => {
  if (timerCounter[2] < 59) {
    ++timerCounter[2];
    timerCounter[2] < 10 ? timerDigits[2].innerText = `0${timerCounter[2]}`
      : timerDigits[2].innerText = `${timerCounter[2]}`;
  }
  else if (timerCounter[1] < 59) {
    timerCounter[2] = 0;
    timerDigits[2].innerText = `00`;
    ++timerCounter[1];
    timerCounter[1] < 10 ? timerDigits[1].innerText = `0${timerCounter[1]}`
      : timerDigits[1].innerText = `${timerCounter[1]}`;
  }
  else {
    timerCounter[2] = 0;
    timerDigits[2].innerText = `00`;
    timerCounter[1] = 0;
    timerDigits[1].innerText = `00`;
    ++timerCounter[0];
    timerCounter[0] < 10 ? timerDigits[0].innerText = `0${timerCounter[0]}`
      : timerDigits[1].innerText = `${timerCounter[0]}`;
  }
}

const startButton = timerButtons[0].onclick = () => {
  if (typeof timerInterval === 'number') { return }
  timerInterval = setInterval(stopWatchCouner, 1000);
  mainContainer.classList.replace(currentClassList, 'green');
  currentClassList = 'green';
}


const stopButton = timerButtons[1].onclick = () => {
  clearInterval(timerInterval);
  mainContainer.classList.replace(currentClassList, 'red');
  currentClassList = 'red';
  timerInterval = undefined;
}

const resetButton = timerButtons[2].onclick = () => {
  clearInterval(timerInterval);
  mainContainer.classList.replace(currentClassList, 'grey');
  currentClassList = 'grey';
  timerCounter[2] = 0;
  timerDigits[2].innerText = `00`;
  timerCounter[1] = 0;
  timerDigits[1].innerText = `00`;
  timerCounter[0] = 0;
  timerDigits[0].innerText = `00`;
  timerInterval = undefined;
}


//////////////////////////////////////////////// Phone Number Field ////////////////////////////////////////////////

const newDiv = document.createElement('div');
newDiv.classList.add('number__container');
body.append(newDiv);
const myInput = document.createElement('input');
myInput.placeholder = '067-777-77-77';

const myButton = document.createElement('button');
myButton.innerText = 'Validate';
newDiv.append(myInput);
newDiv.append(myButton);


myButton.onclick = () => {
  const inputV = document.querySelector('.number__container > input');
  pattern = /^0\d{2}-\d{3}-\d{2}-\d{2}$/;
  if (pattern.test(inputV.value)) {
    let valiDone = document.createElement("i");
    valiDone.classList.add('green', 'fa-check', 'fa-solid', 'fa-fade', 'fa');
    //valiDone.innerHTML = "&#xf00c";
    inputV.before(valiDone);
    setTimeout(() => {
      document.location.href = 'https://kartinki.pibig.info/26197-kartinki-dlja-slajdera.html';
    }, 3000);
    if (document.querySelector('.errordiv')) {
      const elem = document.querySelector('.errordiv');
      elem.remove();
    }
  }
  else {
    if (!document.querySelector('.errordiv')) {
      let errDiv = document.createElement("div");
      errDiv.classList.add('errordiv');
      errDiv.innerText = 'error';
      inputV.before(errDiv);
      console.log('error');
    }
  }
}

//////////////////////////////////////////////// Slider ////////////////////////////////////////////////


const sliderDiv = document.createElement('div');
sliderDiv.classList.add('slider_container');
body.append(sliderDiv);
const sliderImg = document.createElement('img');
sliderDiv.append(sliderImg);

const images = [
  'https://kartinki.pibig.info/uploads/posts/2023-04/1681426191_kartinki-pibig-info-p-kartinki-dlya-slaidera-arti-vkontakte-1.jpg',
  'https://kartinki.pibig.info/uploads/posts/2023-04/1681426174_kartinki-pibig-info-p-kartinki-dlya-slaidera-arti-vkontakte-2.jpg',
  'https://kartinki.pibig.info/uploads/posts/2023-04/1681426185_kartinki-pibig-info-p-kartinki-dlya-slaidera-arti-vkontakte-3.png',
  'https://kartinki.pibig.info/uploads/posts/2023-04/1681426216_kartinki-pibig-info-p-kartinki-dlya-slaidera-arti-vkontakte-7.jpg'
];

let imgNum = 0;

const nextImg = () => {
  if (imgNum === (images.length)) { imgNum = 0; }
  sliderImg.src = images[imgNum];
  imgNum++;
}

setInterval(nextImg, 3000);
