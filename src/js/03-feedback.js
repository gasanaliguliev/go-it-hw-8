import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

const restoreFormState = () => {
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const handleInput = throttle(() => {
  saveFormState();
}, 500);

emailInput.addEventListener('input', handleInput);
messageInput.addEventListener('input', handleInput);

document.addEventListener('DOMContentLoaded', restoreFormState);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  const formState = {
    email: '',
    message: '',
  };
  
  console.log('Form submitted:',  {
    email: emailInput.value,
    message: messageInput.value,
  });
});
