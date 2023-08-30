// const quotes = [
//     "The only way to do great work is to love what you do. - Steve Jobs",
//     "Innovation distinguishes between a leader and a follower. - Steve Jobs",
//     "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
//     "Stay hungry, stay foolish. - Steve Jobs",
//     "The future depends on what you do today. - Mahatma Gandhi",
//     "The best way to predict the future is to create it. - Abraham Lincoln",
//     "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
//     "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
//   ];


const quotes = [
    "যারা হারানো, তারা কখনো হারাতে পারে না। - হারুকি মুরাকামি",
    "যত্ন নেবার প্রতি যত্ন নেয়া যায় না। - রবীন্দ্রনাথ ঠাকুর",
    "বিজয় পেতে না পারাটি ব্যার্থ প্রাণীর কাছে যান্ত্রিক সামগ্রীর প্রয়োগ। - মহাত্মা গান্ধী",
    "ভাগ্য বলে কিছুই নেই, প্রত্যেকের চেষ্টা ও যত্নের উপর তা গড়ে উঠে॥",
    "সুযোগের সাথে জড়িত ঝুঁকি গ্রহনে সাহসী হোন।",
    "যাহা তুমি দেখাও, তার চেয়ে বেশি তোমার থাকা উচিত। যা তুমি জান, তার তুলনায় কম কথা বলা উচিত।",
    "‘সমস্যা’ শব্দটির পরিবর্তে ‘সম্ভাবনা’ শব্দটি বেশি ব্যবহার করুন।",
    "যে সহজ সরল জীবনযাপন করে সুখ তার জন্য অত্যন্ত সুলভ্য॥",
    "সব সমস্যার প্রতিকারই হচ্ছে ধৈর্য",
    "সৎ পরামর্শের চেয়ে কোনো উপহার অধিক মূল্য নয়।",
    "মানুষ যত গোপন পাপ করুক না কেন, তার শাস্থি সে প্রকাশ্যেই পায়।"
  ];




  
  const quoteElement = document.getElementById("quote");
  const generateButton = document.getElementById("generate");
  
  generateButton.addEventListener("click", generateRandomQuote);
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  

  const copyButton = document.getElementById("copy");

copyButton.addEventListener("click", copyQuoteToClipboard);

function copyQuoteToClipboard() {
  const selectedQuote = quoteElement.textContent;
  
  const tempInput = document.createElement("textarea");
  tempInput.value = selectedQuote;
  document.body.appendChild(tempInput);
  
  tempInput.select();
  document.execCommand("copy");
  
  document.body.removeChild(tempInput);
  
  alert("Quote copied to clipboard!");
}






// const quoteElement = document.getElementById("quote");
// const generateButton = document.getElementById("generate");
// const copyButton = document.getElementById("copy");

// generateButton.addEventListener("click", generateRandomQuote);
// copyButton.addEventListener("click", copyQuoteToClipboard);

// async function fetchRandomQuote() {
//   try {
//     const response = await fetch('https://api.quotable.io/random');
//     const data = await response.json();
//     return data.content;
//   } catch (error) {
//     console.error('Error fetching quote:', error);
//     return 'An error occurred while fetching the quote.';
//   }
// }

// async function generateRandomQuote() {
//   const randomQuote = await fetchRandomQuote();
//   quoteElement.textContent = randomQuote;
// }

// function copyQuoteToClipboard() {
//   const selectedQuote = quoteElement.textContent;

//   const tempInput = document.createElement("textarea");
//   tempInput.value = selectedQuote;
//   document.body.appendChild(tempInput);

//   tempInput.select();
//   document.execCommand("copy");

//   document.body.removeChild(tempInput);

//   alert("Quote copied to clipboard!");
// }
