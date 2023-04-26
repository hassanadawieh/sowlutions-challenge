import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  
  render() {
    return (
      <div className="card-main" onClick={this.props.onClick}>
        <div className="card-image">
          <img src={this.props.image} alt="product-card" />
        </div>
        <div className="card-text">
          <h3>{this.props.name}</h3>
          <p>{this.props.price}</p>
        </div>
      </div>
    )
  }
}

export default Card;