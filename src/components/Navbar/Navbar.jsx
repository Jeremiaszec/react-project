import "./Navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";


export const Navbar = ({ quantity }) => {
  //Logica
  return (
    <header className="navbar">
        <div className="navbar__content">
          <img
            className="navbar__logo"
            src={
              "https://w7.pngwing.com/pngs/140/479/png-transparent-logo-brand-trademark-font-red-car-text-trademark-logo.png"
            }
          />
          <nav className="navbar__items">
            <a>Home</a>
            <a>Favoritos</a>
            <a>Menu</a>
            <a>Configuracion</a>
          </nav>
          <CartWidget  cantidad={ quantity } />
        </div>
    </header>
  );
};