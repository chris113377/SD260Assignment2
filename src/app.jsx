import React, { Component } from 'react';

import Header from './header'
import DisplayItem from './displayItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="app">
        <Header />
        <DisplayItem />
      </div>
     );
  }
}
 
export default App;





{/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}