/*
الفكرة هعمل مخرن اخزن فية كل الاقتباسات ومخزن تاني اخزن فية الاقتباسات ال اتعرضت
وبعدين هعمل فانكشن وظيفتها تختار اقتباس من المخزن الاول وبعد ما يتعرض يتمسح ويتحط
في المخزن الثاني وبعد المخزن الاول ما يفضي يتملي تاني من المخزن الثاني وهكذا
*/


// المخزن الاول
var quotes = [
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Don’t wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
];


// المخزن الثاني
var usedQuotes = [];
//
function showQuote() {
// لو المخزن الاول فاضي
  if (quotes.length === 0) {
    // املية من المخزن الثاني 
    for (let i = 0; i < usedQuotes.length; i++) {
      quotes.push(usedQuotes[i]);
    }
    // علشان افضي المخزن التاني لما يتملي
    usedQuotes = [];
  }
  // علشان ادي كل اقتباس رقم عشوائي 
  var randomIndex = Math.floor(Math.random() * quotes.length);
  // علشان اشيل الاقتباس ال هيظهر
  var selectedQuote = quotes.splice(randomIndex, 1)[0];
  usedQuotes.push(selectedQuote);
  // علشان اعرض النتيجة
  document.getElementById("quote").innerText = `"${selectedQuote.text}"`;
  document.getElementById("author").innerText = `-- ${selectedQuote.author}`;
}
