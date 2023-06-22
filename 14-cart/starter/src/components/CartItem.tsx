import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./Context";

//Interface
interface ICart {
  id: string;
  img: string;
  title: string;
  price: string;
  amount: number;
}

const CartItem = ({ id, img, title, price, amount }: ICart) => {
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increaseItem(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decreaseItem(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
