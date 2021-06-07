/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faQuoteLeft, faQuoteRight, faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import './quote.css';

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      quotes: [],
      bgColor: '',
    };
    this.handleClick = this.handleClick.bind(this);
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
      .catch();
  };

  randomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x},${y},${z})`;
    this.setState({
      bgColor,
    });
  }

  componentDidMount() {
    this.randomColor();
    this.readData(this.props.dataURL);
  }

  handleClick = () => {
    this.randomColor();
  }

  render() {
    const { quotes } = this.state;
    const { loading } = this.state;
    const { bgColor } = this.state;

    if (loading) return <div><FontAwesomeIcon icon={faSpinner} className="fa-pulse fa-5x" /></div>;

    const quote = quotes[Math.floor(Math.random() * 1343)];
    const styles = {
      backgroundColor: bgColor,
    };
    const stylesTextQuote = {
      color: bgColor,
      fontSize: '25px',
      fontWeight: '600',
      marginBottom: '10px',
    };
    const stylesText = {
      color: bgColor,
      marginBottom: '20px',
    };

    document.body.style.backgroundColor = this.state.bgColor;

    return (
      <div id="quote-box">
        <div id="text" style={stylesTextQuote}>
          <FontAwesomeIcon style={{ position: 'relative', bottom: '5px', height: '20px' }} icon={faQuoteLeft} />
          {quote.text}
          <FontAwesomeIcon style={{ position: 'relative', bottom: '5px', height: '20px' }} icon={faQuoteRight} />
        </div>
        <div id="author" style={stylesText}>{quote.author}</div>
        <button id="new-quote" type="button" className="btn btn-primary" onClick={this.handleClick} style={styles}>New quote</button>
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote.text}`} target="_top" aria-label="tweet this quote"><button id="tweet" type="button" className="btn btn-primary" style={styles}><FontAwesomeIcon icon={faTwitter} /></button></a>
      </div>
    );
  }
}
