const registerForm = document.querySelector('#register');

const saveDataToLocalStorage = (name, data) => {
  const userData = [];
  userData.push(data);
  if (localStorage[name]) {
    const store = JSON.parse(localStorage.getItem(name));
    store.push(data);
    localStorage.setItem(name, JSON.stringify(store));
  } else {
    localStorage.setItem(name, JSON.stringify(userData));
  }
};

const saveInputs = (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const admin = document.querySelector('#admin').checked;

  const userInfo = {
    name,
    email,
    password,
    admin,
    balance: 1000,
  };

  saveDataToLocalStorage('userData', userInfo);
  registerForm.reset();
  window.location.replace('../home.html');
};

registerForm.addEventListener('submit', saveInputs);
