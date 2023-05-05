import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const emailInput = document.querySelector("input[type='email']");
const messageInput = document.querySelector("textarea[name='message']");
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const dataStorage = {};
updateData();

form.addEventListener('input', throttle(OnFormInput, 500));
form.addEventListener('submit', OnClearData);

function OnFormInput(e) {
  dataStorage[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataStorage));
}
function OnClearData(e) {
  e.preventDefault();
  console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
}
function updateData() {
  const inputArray = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (inputArray) {
    const storage = JSON.parse(inputArray);
    emailInput.value = storage.email;
    messageInput.value = storage.message;
  }
}
