import { useState } from "react";
import { quotes } from "../data/quotes";

export default function useQuote() {
  const rIdx = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[rIdx]);
  let lastQuote;

  if (quote === lastQuote) {
    console.log("This is the same quotes");
    setQuote(quote);
  }
  lastQuote = quote;

  return quote;
}
