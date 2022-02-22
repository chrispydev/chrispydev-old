import { useState } from 'react';
import { quotes } from '../data/quotes';

export default function useQuote() {
  const rIdx = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[rIdx]);
  let lastQuote;

  if (quote === lastQuote) {
    console.log('Ah nah thats the same one bud');
    setQuote(quote);
  }
  lastQuote = quote;

  return quote;
}
