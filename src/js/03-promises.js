import notiflix from 'notiflix';
// notiflix.Notify.info('Cogito ergo sum');
// notiflix.Notify.warning('Memento te hominem esse');

const form = document.querySelector('.form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector(['[name="amount"]']);

form.addEventListener('click', onCreatePromises);

function createPromise(position, delay) {
  delay.preventDefault();
  new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  return Promise;
}

function onCreatePromises(e) {
  e.preventDefault();
  let newDelay = delay;
  for (let i = 1; i <= amount; i++) {
    newDelay += step;

    createPromise(i, newDelay)
      .then(({ position, delay }) => {
        notiflix.Notify.success(
          `✅ Fullfield promise ${position}in ${delay}ms`
        );
        // alert('success');
      })
      .catch(({ position, delay }) => {
        notiflix.Notify.failure(`❌Rejected promise ${position}in ${delay}ms`);
        // alert('fail');
      });
  }
}
