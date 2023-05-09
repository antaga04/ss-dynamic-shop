import "./menu.css";

export const Menu = () => {
  return `
    <section class="drop-menu">
      <div class="menu-content">
        <ul class="mobile-menu">
          <li><a id="homeLink">Home</a></li>
          <li><a id="shopLink">Shop</a></li>
          <li><a id="topSalesLink">Top Sales</a></li>
          <li><a id="aboutLink">About</a></li>
        </ul>
      </div>
    </section>
    `;
};
