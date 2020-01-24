import React, { Component } from 'react';

// import jsonData from "./src/database.json";

class DisplayItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: {}
     }
  }

  fetchData() {
    fetch("/database.json")
      .then(response => response.json())
      .then(json => this.setState({items: json}, console.log(json)))
      .catch(error => console.error(error));
  }



  render() { 
    
    console.log(this.state.items)
    return ( 
      <div className="post">
        {/* {this.state.items.map(elem => {
          return(
            <React.Fragment key={elem.name}>
            <img src="https://picsum.photos/30/30" alt=""></img>
            <h3 className="timestamp">Posted</h3>
            <p className="bubble">{elem.name}</p>
            </React.Fragment>
          )
        })} */}
      </div>
     );
  }
}
 
export default DisplayItem;