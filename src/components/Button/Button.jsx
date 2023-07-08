import "./Button.css";

export const Button = ({ callback, text }) => (
    <button className="cart-button" onClick={callback}>{ text }</button>
);
