import React, { Component } from 'react';

import Item from "./item";

class DisplayItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: ''
     }
  }

  componentDidMount() {
    fetch("./database.json")
      .then(response => response.json())
      .then(json => this.setState({items: json}, console.log(json)))
      .catch(error => console.error(error));
  }

  addVote = (itemID) => {
    this.setState({votes: this.state.items.map(item => {
      if (item.id === itemID) {
        item.votes = item.votes + 1
      }
      return item;
    })})
    this.state.items.sort((a, b) => Number(b.votes) - Number(a.votes));
  }

  render() { 
    return ( 
      <div className="post">
        <Item 
          itemsToDisplay={this.state.items} 
          addVote={this.addVote}
          />
      </div>
     );
  }
}
 
export default DisplayItem;