import MenuLinks from "./MenuLinks";

const BurgerMenu = (props) => {
  return (
    //   show either closed or opened menu on small display
    <div
      className={props.isVisible ? "burger-menu-opened" : "burger-menu-closed"}
    >
      <MenuLinks />
    </div>
  );
};

export default BurgerMenu;
