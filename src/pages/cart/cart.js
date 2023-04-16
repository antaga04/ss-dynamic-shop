import "./cart.css";
import { Footer } from "../../Components/footer/footer";
import { Header } from "../../Components/header/header";

export const Cart = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  const main = document.createElement("main");
  app.innerHTML = Header();

  main.innerHTML = `
    <div class="popular-main">
      <h1>Cart</h1>
      <div>
        no tienes nada en la cesta pendejo. compra para que me haga millonario
      </div>
    </div>
  `;

  app.appendChild(main);
  app.innerHTML += Footer();
};
