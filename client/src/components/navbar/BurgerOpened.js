const BurgerOpened = (props) => {
  let isVisible,
    setIsVisible = { ...props };
  return (
    <div className={isVisible ? "burger-opened" : "burger-closed"}>
      <img
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619390570/domy/burger-menu-opened_cubecv.png"
        alt="menu icon closed"
        onClick={setIsVisible(!isVisible)}
      />
    </div>
  );
};

export default BurgerOpened;
