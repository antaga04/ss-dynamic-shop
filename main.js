import "./style.css";
import { Home } from "./src/pages/home/home";
import { Shop } from "./src/pages/shop/shop";
import { linkPage } from "./src/utils/linkPage";
import { About } from "./src/pages/about/about";
import { Popular } from "./src/pages/popular/popular";
import { Cart } from "./src/pages/cart/cart";

Home();
linkPage("#homeLink", Home);
linkPage("#shopLink", Shop);
linkPage("#popularLink", Popular);
linkPage("#aboutLink", About);
linkPage("#cartLink", Cart);

