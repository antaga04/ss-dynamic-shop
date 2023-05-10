import './cart.css';
import { Footer } from '../../Components/footer/footer';
import { Header } from '../../Components/header/header';
import { addToCart } from '../../utils/listeners';
import { Data, cart } from '../../utils/albumsData';
import { getCart } from '../../utils/functions';

const app = document.querySelector('#app');
const main = document.createElement('main');

export const Cart = () => {
  app.innerHTML = '';
  app.innerHTML = Header();

  main.innerHTML = `
    <div class="popular-main">
      <h1>Cart</h1>
      <div>
        Comming soon...
      </div>
    </div>
  `;

  app.appendChild(main);
  app.innerHTML += Footer();
};

/* getCart(cart);
addToCart(app, Data, cart); */
