const counterButton = document.querySelector('.counter-button');
const resetButton = document.querySelector('.reset-button')


let counter = 0;

counterButton.addEventListener('click', () => {
  // increment the counter varaiable
  counter++;

  // store the counter varaiable in local storage
  localStorage.setItem('buttonClicks', counter);

  // update UI with the current value of the counter varaiable
  document.querySelector('.count').textContent = counter;
});

resetButton.addEventListener('click', () => {
  // resets to 0
  counter = 0;

  // store the current counter variable in local storage
  localStorage.setItem('buttonClicks', counter)

  // update the Ui with the current value of the counter variable
  document.querySelector('.count').textContent = counter;

})

// retrieve the counter value from local storage
const storedClicks = localStorage.getItem('buttonClicks');

// update the counter variable with the store value
if (storedClicks) {
  counter = parseInt(storedClicks)
}

// update the UI with the current value of the counter variable
document.querySelector('.count').textContent = counter;
































// let count = document.querySelector('.count');

// counterButton.addEventListener('click', () => {
//   // let count = document.querySelector('.count');


//   let result = Number(count.innerHTML) + 1;

//   count.innerText = result;
//   document.cookie = "count=result; expires=Wed, 05 Aug 2023 23:00:00 UTC";
// })

// resetButton.addEventListener('click', () => {
//   // let count = document.querySelector('.count');
//   let result = Number(count.innerText) * 0;

//   count.innerText = result;
// })