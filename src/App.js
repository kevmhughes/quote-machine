import React, {Component} from 'react';
import Quote from './components/quote/quote';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataURL: 'https://type.fit/api/quotes',
    }
  }

  render () {
    return (
      <div>
        <Quote dataURL={this.state.dataURL}/>
      </div>
    );
  }
}

export default App;
