/**
 * Renders the application's navigation menu with links, cart nav, and responsive menu controls
 */
import { Link, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => setIsOpen(false));

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.key]);

  return (
    <div ref={menuRef} className="top-nav">
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        >
          <line x1="5" y1="7" x2="19" y2="7"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <line x1="5" y1="17" x2="19" y2="17"></line>
        </svg>
      </button>
      <div className="logo">
        <Link to="/">
          <img
            id="hero"
            src="../../Images/HSW_Logo2.png"
            alt="SkuSuks logo"
          ></img>
        </Link>
      </div>

      <div className="cart">
        <Link to="/cart">
          <svg
            viewBox="0 0 512 512"
            width="30"
            height="30"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.10542736e-15,-1.42108547e-14 L70.3622093,-1.42108547e-14 L89.7493333,85.3333333 L378.389061,85.3333333 L337.246204,277.333333 
                        L89.6377907,277.333333 L36.288,42.6666667 L7.10542736e-15,42.6666667 L7.10542736e-15,-1.42108547e-14 Z M325.610667,128 L99.456,128 L123.690667,234.666667 
                        L302.741333,234.666667 L325.610667,128 Z M138.666667,384 C156.339779,384 170.666667,369.673112 170.666667,352 C170.666667,334.326888 156.339779,320 
                        138.666667,320 C120.993555,320 106.666667,334.326888 106.666667,352 C106.666667,369.673112 120.993555,384 138.666667,384 Z M288,384 C305.673112,384 
                        320,369.673112 320,352 C320,334.326888 305.673112,320 288,320 C270.326888,320 256,334.326888 256,352 C256,369.673112 270.326888,384 288,384 Z"
            ></path>
          </svg>
        </Link>
      </div>
      <nav className="nav-menu" hidden={!isOpen}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/apparel">Apparel</Link>
          </li>
          <li>
            <Link to="/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/preorder">Pre Orders</Link>
          </li>
          <li>
            <Link to="/newdrops">New Drops</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
