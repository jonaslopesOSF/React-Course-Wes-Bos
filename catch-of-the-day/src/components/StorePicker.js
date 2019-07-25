import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = event => {

    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  }

  render() { 
    return (
      <form 
        className="store-selector"
        onSubmit={this.goToStore}>
        {/* Here is a store picker */}
        <h2>Please Enter a Store</h2>

        <input
          type="text"
          ref={this.myInput}
          required={true}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
            
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
