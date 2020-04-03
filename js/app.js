/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

//This is the function to greeting you and put the greeting words in header

function greetings(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow >12) {
        greeting = 'Good afternoon!';
    } else if (hourNow >0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
    var new_greeting = greeting;
    return new_greeting;
}

