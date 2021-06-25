import MenuLinks from "./MenuLinks";

const LargeNav = () => {
  return (
    <div className="nav">
      <h1>
        <a href="/">
          Game<span>Shop</span>
        </a>
      </h1>
      <MenuLinks />
    </div>
  );
};

export default LargeNav;
