//Declaring an Aray of Quotes 
const quotes = [{
        quoteText: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
        quoteAuthor: "~Lao Tzu"
    },
    {
        quoteText: "Every great dream begins with a dreamer. Always remember you have within you the strength, the patience and the passion to reach for the stars, to change the world.",
        quoteAuthor: "~ Harriet Tubman"
    },
    {
        quoteText: "There are two great days in a person's life - the day we are born and the day we discover why.",
        quoteAuthor: "~ William Barclay"
    },
    {
        quoteText: "Your work is going to fill a large part of your life and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
        quoteAuthor: "~ Steve Jobs"
    },
    {
        quoteText: "The three great essentials to achieve anything worth while are Hard work Stick-to-itiveness and Common sense.",
        quoteAuthor: "~ Thomas A. Edison"
    },
    {
        quoteText: "Be yourself; everyone else is already taken.",
        quoteAuthor: "~ Oscar Wilde"
    },
    {
        quoteText: "Don't cry because it's over, smile because it happened.",
        quoteAuthor: "~  Dr. Seuss"
    },
    {
        quoteText: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        quoteAuthor: "~ Albert Einstein"
    },
    {
        quoteText: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        quoteAuthor: "~ Dr. Seuss"
    },
    {
        quoteText: "You only live once, but if you do it right, once is enough.",
        quoteAuthor: "~ Mae West"
    },
    {
        quoteText: "Be the change that you wish to see in the world.",
        quoteAuthor: "~  Mahatma Gandhi"
    },
    {
        quoteText: "In three words I can sum up everything I've learned about life: it goes on.",
        quoteAuthor: "~ Robert Frost"
    },
    {
        quoteText: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        quoteAuthor: "J.K. Rowling"
    },
    {
        quoteText: "If you tell the truth, you don't have to remember anything.",
        quoteAuthor: "~ Mark Twain"
    },
    {
        quoteText: "Always forgive your enemies; nothing annoys them so much.",
        quoteAuthor: "~ Oscar Wilde"
    },
    {
        quoteText: "To live is the rarest thing in the world. Most people exist, that is all.",
        quoteAuthor: "~ Oscar Wilde"
    },
    {
        quoteText: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        quoteAuthor: "~ Maya Angelou"
    },
    {
        quoteText: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        quoteAuthor: "~ Bernard M. Baruch"
    },
    {
        quoteText: "When someone loves you, the way they talk about you is different. You feel safe and comfortable.",
        quoteAuthor: "~ Jess C. Scott, The Intern"
    },
    {
        quoteText: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        quoteAuthor: "~ Mahatma Gandhi"
    },
    {
        quoteText: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        quoteAuthor: "Ralph Waldo Emerson"
    },
    {
        quoteText: "Who looks outside, dreams; who looks inside, awakes.",
        quoteAuthor: "~ Carl Jung"
    },
    {
        quoteText: "The scariest moment is always just before you start.",
        quoteAuthor: "~ Stephen King"
    },
    {
        quoteText: "I exist as I am, that is enough.",
        quoteAuthor: "~ Walt Whitman"
    },
    {
        quoteText: "We know what we are, but know not what we may be.",
        quoteAuthor: "~ William Shakespeare"
    },
    {
        quoteText: "Intent is prior to content. If you don't have an honest intent for an answer, don't ask the question.",
        quoteAuthor: "~ Ravi"
    },
];

//assigning the Html elements to variables using querySelector
const changeQuote = document.querySelector('#submitBtn');
const quoteBox = document.querySelector('#quoteBox');
const getAuthor = document.querySelector('#author');

//Click Event
changeQuote.addEventListener('click', getQuote);


function getQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    quoteBox.innerHTML = quotes[random].quoteText;
    getAuthor.innerHTML = quotes[random].quoteAuthor;
    document.getElementById('box').style.visibility = 'visible'; //make the blockquote visible
};
getQuote();

//set interval for quote to randomly change automatically
setInterval(() => {
    getQuote();
}, 10000);