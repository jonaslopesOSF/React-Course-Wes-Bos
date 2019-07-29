import React, { Component } from "react";
import { formatPrice } from "../helpers";

class Fish extends Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = (status === 'available'); // it returns true or false

    return (
      <li className="menu-fish">
        <img src={image} alt={image} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button 
          disabled={!isAvailable}
          onClick={this.handleClick}>
            {isAvailable ? "Add to Cart" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
