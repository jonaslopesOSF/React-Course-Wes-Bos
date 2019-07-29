import React, { Component } from "react";

class EditFishForm extends Component {
  handleChange = (event) => {
    // update that fish
    // 1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      // it takes the DOM name and update each field listed
      [event.currentTarget.name]: event.currentTarget.value  
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    return (
      <div className="fish-edit">
        <input 
          type="text"
          name="name" 
          onChange={this.handleChange}
          value={this.props.fish.name} 
          />
        <input 
          type="text" 
          name="price" 
          onChange={this.handleChange}
          value={this.props.fish.price} 
          />
        <select
          name="status"
          type="text"
          placeholder="Status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea 
          name="desc" 
          type="text" 
          onChange={this.handleChange}
          value={this.props.fish.desc} 
          />

        <input 
          type="text" 
          name="image" 
          onChange={this.handleChange}
          value={this.props.fish.image} 
          />
      </div>
    );
  }
}

export default EditFishForm;
