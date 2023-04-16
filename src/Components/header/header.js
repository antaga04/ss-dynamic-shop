import "./header.css";

export const Header = () => {
  return `
    <header id="header">
      <section class="header-container">
        <article class="header-side">
          <aricle class="logo">
            <a href=""><img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1681568524/Rock%20Shop/solid-sounds-logo_vwl7d8.png" alt="SolidSounds Logo"></a>
            <h1>Solid Sounds</h1>
          </aricle>

          <article class="menu-container">
            <div class="menu">
              <label class="tablet-burger" for="hamburger">Menu<span>▾</span></label>
              <label class="mobile-burger" for="hamburger">&#9776;</label>
              <input class="aa-hamburger hidden" type="checkbox" id="hamburger" />

              <section class="aa-header__nav">
                <div class="nav-links">
                  <a id="homeLink" class="homeLink nav-link" href="#home">
                    <h2 class="nav-link__title">Home</h2>
                    <img class="nav-link__image" 
                    src="https://res.cloudinary.com/drsfru9lj/image/upload/v1680603730/Rock%20Shop/cd-drawing_hxrzsh.jpg" 
                    alt="Home overview">
                  </a>
                  <a id="shopLink" class="shopLink nav-link" href="#shop">
                    <h2 class="nav-link__title">Shop</h2>
                    <img class="nav-link__image" 
                    src="https://res.cloudinary.com/drsfru9lj/image/upload/v1680649242/Rock%20Shop/rock-cds_bbjskj.avif" 
                    alt="Albums overview">
                  </a>
                  <a id="popularLink" class="popularLink nav-link" href="#popular">
                    <h2 class="nav-link__title">Popular</h2>
                    <img class="nav-link__image" 
                    src="https://res.cloudinary.com/drsfru9lj/image/upload/v1680649242/Rock%20Shop/ourtop_jbtp5n.avif" 
                    alt="Our Top overview">
                  </a>
                  <a id="aboutLink" class="aboutLink nav-link" href="#about">
                    <h2 class="nav-link__title">About</h2>
                    <img class="nav-link__image" 
                    src="https://res.cloudinary.com/drsfru9lj/image/upload/v1680649242/Rock%20Shop/profile_owxg9t.avif" 
                    alt="About">
                  </a>
                </div>
              </section>

              <ul class="flex nav">
                <li><a id="homeLink" href="#home">Home</a></li>
                <li><a id="shopLink" href="#shop">Shop</a></li>
                <li><a id="popularLink" href="#popular">Popular</a></li>
                <li><a id="aboutLink" href="#about">About</a></li>
              </ul>
            </div>
          </article>
        </article>

        <article class="header-side">
          <div class="search-bar">
            <input type="text" class="ss-flex" id="searchInput" placeholder="Search..." />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <a id="cartLink" href="#cart"><i class="fa-solid fa-cart-shopping"></i><span>[0]</span></a>
        </article>
      </section>
    </header>
  `;
};
