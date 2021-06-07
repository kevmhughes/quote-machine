import React from 'react';


export default class Quote extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  
  render () {
    return (
      <div id="quote-box">
        <div id="text">Hello</div>
        <div id="author">Me</div>
        <button id="new-quote"type="button" className="btn btn-primary">New quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet" aria-label="tweet this quote">tweet</a>
      </div>
    );
  }
}


