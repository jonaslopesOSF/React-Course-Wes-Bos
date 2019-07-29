import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    // First reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    // Setting state of orders rebuilding a object with JSON.parse
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    }); 
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId, 
      JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // 1. Take a copy of the existing state
    // this.state.fishes.push(fish) -> WROOOONG!
    const fishState = {...this.state};
    const fishes = fishState.fishes;
    const countFishes = Object.keys(fishes).length+1;
    // 2. Add our new fish to that fishes variable
    fishes[`fish_${countFishes}`] = fish // it's will be the key of the object
    // 3. Set the new fishes object to state
    this.setState({
       fishes
    });
    // or just fishes, 'cause when you have the same name you can
    // do this in ES6
  };

  loadSampleFishes = () => {
   this.setState({ fishes: sampleFishes })
  }

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // 2. Update that stete
    fishes[key] = updatedFish;
    // 3. Set that to state
    this.setState({ fishes })
  }

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = {...this.state.order};
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1; // if not exists, 1. If exists, this + 1
    // 3. Call setState to update our state object
    this.setState({ order: order }); // or just order
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          
          {/* Rendering fishes below the header */}
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(fish => (
              <Fish 
                key={fish} 
                index={fish} 
                // need to index because you can't access the key property in react
                details={this.state.fishes[fish]}
                addToOrder={this.addToOrder} /> 
            ))}
          </ul>
        </div>

        <div className="order">
          <Order
            fishes={this.state.fishes}
            order={this.state.order}
          />
        </div>

        <div className="inventory">
          <Inventory 
            addFish={this.addFish}
            updateFish={this.updateFish}
            loadSampleFishes={this.loadSampleFishes}
            fishes={this.state.fishes} />
        </div>
      </div>
    );
  }
}

export default App;
