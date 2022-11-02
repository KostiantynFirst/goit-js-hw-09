import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amountRef = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
return new Promise((resolve, reject) => {
  setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
}, delay);
});
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  
  let delayFirst = Number(firstDelay.value);
  let stepDelay = Number(delayStep.value);
  let amount = Number(amountRef.value); 

  for(let i = 1; i <= amount; i +=1 ) {
      createPromise(i, delayFirst)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delayFirst += stepDelay;
  }
  

}

