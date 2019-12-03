'use strict';

const qoutes = [
    {
        qoute: "Faith is not belief without proof, but trust without reservation.",
        author: "D. Elton Trueblood"
    },
    {
        qoute: "Progress always involves risks. You can't steal second base and keep your foot on first.",
        author: "Frederick B Wilcox"
    },
    {
        qoute: "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
        author: "J.R.R. Tolkien"
    },
    {
        qoute: "I couldn't wait for success, so I went ahead without it.",
        author: "Jonathan Winters "
    },
    {
        qoute: "A man can fail many times, but he isn't a failure until he begins to blame somebody else.",
        author: "John Burroughs"
    },
    {
        qoute: "There's an important difference between giving up and letting go.",
        author: "Jessica Hatchigan"
    },
    {
        qoute: "Why not go out on a limb? Isn't that where the fruit is?",
        author: "Frank Scully"
    },
    {
        qoute: "Neither a wise man nor a brave man lies down on the tracks of history to wait for the train of the future to run over him.",
        author: "D. Eisenhower"
    },
    {
        qoute: "Life is the hyphen between matter and spirit.",
        author: "William Hare & us Charles Hare"
    },
    {
        qoute: "The Ultimate Answer to Life, The Universe and Everything is...42!",
        author: "Douglas Adams"
    }
];


let randomInteger = () => Math.floor(Math.random() * qoutes.length);

/* FUNCTION To get a qoute */
function getAQoute() {
    let num = randomInteger();
    $("#text").text(qoutes[num].qoute);
    $("#author").text("- " + qoutes[num].author);
    $("#link-wrapper").html(`<a id="tweet-quote" class="text-decoration-none" href="https://twitter.com/intent/tweet?text=${qoutes[num].qoute}" target="_blank">Tweet</a>`)
}

/* Initial qoute, when the page is loaded */
$(document).ready(getAQoute);


/* Gives a new qoute on button click */
$("#new-quote").click(getAQoute);