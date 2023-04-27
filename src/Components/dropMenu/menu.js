import "./menu.css";

export const Menu = () => {
  return `
    <section class="drop-menu">
      <div class="menu-content">
        <ul class="mobile-menu">
          <li><a id="homeLink" href="#home">Home</a></li>
          <li><a id="shopLink" href="#shop">Shop</a></li>
          <li><a id="popularLink" href="#topsales">Top Sales</a></li>
          <li><a id="aboutLink" href="#about">About</a></li>
        </ul>
      </div>
    </section>
    `;
};
