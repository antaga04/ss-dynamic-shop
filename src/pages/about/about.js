import "./about.css";
import { Footer } from "../../Components/footer/footer";
import { Header } from "../../Components/header/header";

export const About = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  const main = document.createElement("main");
  app.innerHTML = Header();

  main.innerHTML = `
  <div class="about-main">
    <h1>ABOUT</h1>
    <div>
      <div>
        <p class="p1">&nbsp;</p>
        <p class="p1">&nbsp;</p>
        <p class="p1"><i>“MUSIC IS A UNIVERSAL LANGUAGE THAT UNITES US ALL, AND WE WANT TO BRING THE BEST OF IT TO YOUR EARS”</i></p>
        <p class="p1">&nbsp;</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">At Solid Sounds, we're passionate about music and believe that everyone should have access to the best CD rock collection out there. As an online shop based in Galicia, we have a mission to make sure our customers can easily find and purchase the music they love.</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">Our team is composed of dedicated individuals who share the same passion for music and a vision for creating a community of rock lovers. We believe that music is not just a form of entertainment, but a way of life, and we want to share that with you.</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">Since our inception, we've always focused on delivering high-quality products to our customers. Our collection of CD rock is carefully curated to include only the best and most iconic albums. We don't compromise on quality and always strive to provide our customers with an exceptional shopping experience.</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">Our goal is to be more than just an online shop. We want to build a community of music enthusiasts and provide them with a platform to discover new music, connect with other fans and share their love for rock music. We're constantly updating our collection to keep up with the latest trends and provide our customers with a diverse range of music.</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">Most importantly, we owe our success to our customers who have supported us from the beginning. We're committed to providing you with the best products and services, and we appreciate your trust in us.</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">&nbsp;</p>
        <p class="p1">From Galicia,</p>
        <p class="p1">With Rock</p>
        <p class="p1">Solid Sounds® Team</p>
      </div>
    </div>
  </div>
  `;

  app.appendChild(main);
  app.innerHTML += Footer();
};
