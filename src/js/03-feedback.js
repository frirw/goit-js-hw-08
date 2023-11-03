import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = feedbackForm.querySelector('input[name="email"]');
const message = feedbackForm.querySelector('textarea[name="message"]');

const storageKey = 'feedback-form-state';

feedbackForm.addEventListener('submit', onSubmitHandle);
feedbackForm.addEventListener('input', throttle(inputHandle, 500));

savedStorageValue();

function onSubmitHandle(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Всі поля повинні бути заповнені.');
  }
  const inputData = {
    email: email.value,
    message: message.value,
  };
  console.log(inputData);
  event.currentTarget.reset();
  localStorage.removeItem(storageKey);
}

<<<<<<< Updated upstream
function inputHandle(event) {
=======
function inputHandle() {
>>>>>>> Stashed changes
  const inputData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(inputData));
}

function savedStorageValue() {
  const savedInput = JSON.parse(localStorage.getItem(storageKey));
  if (savedInput) {
    if (savedInput.message) {
      message.value = savedInput.message;
    }
    if (savedInput.email) {
      email.value = savedInput.email;
    }
  }
}
