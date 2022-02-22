import { useState } from 'react';
import { quotes } from '../data/quotes';

export default function useQuote() {
  const rIdx = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[rIdx]);

  return quote;
}
