import './App.css'

import { useState, useEffect } from 'react';

const quotes = [
  { author: "Internet", text: "JavaScript is the only language where 'null' is an object and an array can be equal to the number 2."},
  { author: "Internet", text: "JavaScript: The only language where you can be NaN and still be a number."},
  { author: "Internet", text: "JavaScript: Because sometimes 'undefined' is not 'undefined' enough."},
  { author: "Internet", text: "In JavaScript, '== null' is a beautiful way to say 'I give up.'"},
  { author: "Internet", text: "JavaScript: Where 0.1 + 0.2 is not equal to 0.3 and that's just the beginning."},
  { author: "Internet", text: "JavaScript: The language that brought us 'undefined is not a function'."},
  { author: "Internet", text: "JavaScript is like the English language: flexible, forgiving, and widely misunderstood."},
  { author: "Internet", text: "JavaScript is the duct tape of the web. It holds everything together, but you never know when it might unravel."},
  { author: "Internet", text: "JavaScript: Where 'closure' doesn't mean solving your problems."},
  { author: "Internet", text: "JavaScript arrays: Because sometimes, length is just a suggestion."},
  { author: "Internet", text: "JavaScript: Where 'false == []' and 'true == [1]'. Enjoy the ride!"},
  { author: "Internet", text: "JavaScript: The art of confusing newcomers since 1995."},
  { author: "Internet", text: "JavaScript: Where variable scoping is more like a game of hide and seek."},
  { author: "Internet", text: "JavaScript: Turning 'undefined' into an art form since 'undefined' was invented."},
  { author: "Internet", text: "JavaScript is the language that taught me to expect the unexpected... consistently."},
  { author: "Internet", text: "JavaScript is the language where even the bugs have bugs."}
];

function App() {
  const [index, setIndex] = useState(0);

  const setRandomQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === index);
    setIndex(randomIndex);
  };

  useEffect(() => {
    setRandomQuote(); // set initial quote
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  const quote = quotes[index];

  return (
    <div id="quote-box">
      <div id="text">{quote.text}</div>
      <div id="author">{ "--" + quote.author}</div>
      <button id="new-quote" onClick={setRandomQuote}>New Quote</button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
}

export default App;
