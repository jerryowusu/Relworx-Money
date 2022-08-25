/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable radix */

export default function transfer(store, sender, amount) {
  store.forEach((person) => {
    if (person.email === sender.email) {
      if (Number(sender.balance) >= Number(amount)) {
        person.balance = parseInt(person.balance) - parseInt(amount);
        const current = {
          ...sender,
          balance: parseInt(sender.balance) - parseInt(amount),
        };
        localStorage.setItem('currentUser', JSON.stringify(current));
      } else {
        alert('Transfer successfully made!');
      }
    } else {
      return 'Error, try again later';
    }
  });
  localStorage.setItem('userData', JSON.stringify(store));
}

export function updateStore(store, user, amount, form) {
  store.forEach((person) => {
    if (person.email === user.email) {
      person.balance = parseInt(person.balance) + parseInt(amount);
      alert(form, 'Top-up  was made successfully!');
    } else {
      return null;
    }
  });

  localStorage.setItem('userData', JSON.stringify(store));
}
