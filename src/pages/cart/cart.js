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
        Comming soon...
      </div>
      <button data-open-modal>Open</button>
      <dialog data-modal class="dialog-content">
        <div>This is a modal</div>
        <button data-close-modal>Close</button>
      </dialog>
    </div>
  `;

  app.appendChild(main);
  app.innerHTML += Footer();
};
