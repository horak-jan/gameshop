import { useState } from "react";

const MenuLinks = () => {
  const { isAuthenticated, setIsAuthenticated } = useState(false);
  return (
    <>
      <ul>
        <li>
          <a href="/games">Games</a>
        </li>
        <li>
          <a href="/hardware">Hardware</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>

        {/* for signed in user */}
        {isAuthenticated ? (
          <li>
            <a href="/">Sign out</a>
          </li>
        ) : (
          // for user that didnt sign up
          <li>
            <a href="/login">Sign in</a>
          </li>
        )}
      </ul>
    </>
  );
};

export default MenuLinks;
