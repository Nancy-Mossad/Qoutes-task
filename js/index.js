var quotes = [
    "So many books, so little time. - Frank Zappa",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "It is never too late to be what you might have been. - George Eliot",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
];

var currentQuoteIndex = -1;

function getQuote() {
    var randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === currentQuoteIndex);
    
    currentQuoteIndex = randomIndex;
    document.getElementById("quote").innerHTML = quotes[randomIndex];
}





//getQuote();
