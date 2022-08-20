const services = [
  {
    id: 1,
    name: 'wallet',
    img: '/images/wallet.jpeg',
  },
  {
    id: 2,
    name: 'withdraw',
    img: '/images/withdraw.jpeg',
  },
  {
    id: 3,
    name: 'transfer',
    img: '/images/send.png',
  },
  {
    id: 4,
    name: 'transactions',
    img: '/images/transactions.jpeg',
  },
];

const transactions = document.querySelector('#transactions');

const loadTransactions = () => {
  if (transactions != null) {
    services.forEach((service) => {
      const render = `
            <a href="/transactions/${service.name}.html" class="transaction-card">
             <div className="name">${service.name}</div>
             <div className="image">
               <img src="${service.img}" alt="" />
             </div>
             <br/>
             </a>
            `;
      transactions.innerHTML += `\n ${render}`;
    });
  }
};

document.addEventListener('DOMContentLoaded', loadTransactions);
