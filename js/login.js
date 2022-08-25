const loginForm = document.querySelector('#login-form');
const message = document.querySelector('.error-message');

const setCurrentUser = (data, userEmail) => {
  const userData = JSON.parse(localStorage.getItem(data));
  userData.forEach((user) => {
    if (user.email === userEmail) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }
    return null;
  });
};

const authenticateLogin = (data, userInfo, form) => {
  const userData = JSON.parse(localStorage.getItem(data));
  userData.forEach((data) => {
    if (data.email === userInfo.email && data.password === userInfo.password) {
      setCurrentUser('userData', userInfo.email);
      form.reset();
      window.location.replace('../home.html');
    } else {
      message.innerHTML = 'Invalid email or password';
    }
  });
};

const loadInputs = (e) => {
  e.preventDefault();

  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;

  const userInfo = {
    email,
    password,
  };

  authenticateLogin('userData', userInfo, loginForm);
};

loginForm.addEventListener('submit', loadInputs);
