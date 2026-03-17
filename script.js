// script.js
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('button');

// Array of quote objects with quotes and authors
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    }
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a random quote
function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = `"${randomQuote.quote}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
}

// Add click event listener to the button
button.addEventListener('click', displayRandomQuote);

// Display a random quote when the page loads
window.addEventListener('load', displayRandomQuote);