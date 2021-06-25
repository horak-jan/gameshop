import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
const Burger = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="burger">
      <h1>
        <a href="/">
          Game<span>Shop</span>
        </a>
      </h1>
      {/* show opened / closed burger menu image */}
      <img
        className="burger-button"
        onClick={() => setIsVisible(!isVisible)}
        alt="menu button"
        src={
          isVisible
            ? "https://res.cloudinary.com/dsdaneoq8/image/upload/v1619390570/domy/burger-menu-opened_cubecv.png"
            : "https://res.cloudinary.com/dsdaneoq8/image/upload/v1619390570/domy/burger-menu-closed_xotl2s.png"
        }
      />

      <BurgerMenu isVisible={isVisible} />
    </div>
  );
};

export default Burger;
