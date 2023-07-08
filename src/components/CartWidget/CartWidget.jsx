import { FaCartPlus } from "react-icons/fa";
import "./CartWidget.css";

export const CartWidget = ({ cantidad }) => (
  <div className="cart-widget">
    <FaCartPlus /> <span className="cart-widget__qty">({ cantidad })</span>
  </div>
);