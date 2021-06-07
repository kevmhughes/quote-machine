import React, {Component} from 'react';
import './quote.css';


export default class Quote extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      quotes: [],
    }
  }

  readData = (dataURL) => {
    fetch(dataURL)
      .then((res) => res.json())
      .then((result) => {
        const quotes = result;
        this.setState({
          loading: false,
          quotes,
        });
        console.log(quotes)
      })
      .catch(console.log);
  };

  componentDidMount() {
    this.readData(this.props.dataURL);
  }

  changeState() {
    
  }

  render () {
    const {quotes} = this.state;
    const {loading} = this.state;

    if (loading) return <div>Spinner goes here</div>

    const quote = quotes[Math.floor(Math.random() * 1343)];
    console.log(quote)
    return (
      <div id="quote-box">
        <div id="text">{quote.text}</div>
        <div id="author">{quote.author}</div>
      <button id="new-quote"type="button" className="btn btn-primary" onClick={this.changeState}>New quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet" aria-label="tweet this quote">tweet</a>
      </div>
    );
  }
}


