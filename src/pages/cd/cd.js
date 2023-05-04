import "./cd.css";
import { Header } from "../../Components/header/header";
import { Footer } from "../../Components/footer/footer";

const app = document.querySelector("#app");
const main = document.createElement("main");

export const CDpage = (list) => {
  app.innerHTML = "";
  app.innerHTML = Header();

  main.classList.add("fade-in");
  main.innerHTML = '<div>cd</div>'
  app.appendChild(main);

  app.innerHTML += Footer();
};
