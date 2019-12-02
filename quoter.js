'use strict';

let randomInteger = () => Math.floor(Math.random() * 2);

const qoutes = [{
        qoute: "Faith is not belief without proof, but trust without reservation.",
        author: "D. Elton Trueblood"
    },
    {
        qoute: "Progress always involves risks. You can't steal second base and keep your foot on first.",
        author: "Frederick B Wilcox"
    }
];

/* Initial qoute, when the page is loaded */
$( document ).ready(function(){
    let num = randomInteger();
$("#text").text(qoutes[num].qoute);
$("#author").text(qoutes[num].author);
});


/* Gives a new qoute on button click */
$("#new-quote").click(function(){
    let num = randomInteger();
    $("#text").text(qoutes[num].qoute);
    $("#author").text(qoutes[num].author);
});
