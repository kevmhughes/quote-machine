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
      })
      .catch(console.log);
  };

  componentDidMount() {
    this.readData(this.props.dataURL);
  }

  handleClick = () => {
    this.readData(this.props.dataURL);
  }

  render () {
    const {quotes} = this.state;
    const {loading} = this.state;

    if (loading) return <div>Spinner goes here</div>

    const quote = quotes[Math.floor(Math.random() * 1343)];
    console.log(quote)

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    const styles  = {
      backgroundColor: bgColor
    }
      
    return (
      <div id="quote-box" style={styles}>
        <div id="text">{quote.text}</div>
        <div id="author">{quote.author}</div>
      <button id="new-quote"type="button" className="btn btn-primary" onClick={this.handleClick}>New quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet" aria-label="tweet this quote">tweet</a>
      </div>
    );
  }
}


