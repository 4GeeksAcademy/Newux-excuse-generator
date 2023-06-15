/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //first declare the arrays that contain the values to use in the sentence
  //the function will have to access each index in each array
  let who = ["The puppy monkey", "My duck", "His squirell", "My parrot"];
  let action = ["devoured", "pooped on", "obliterated", "damaged"];
  let what = ["my laptop", "the smoothie bowl", "the churro"];
  let when = [
    "before the horse ride",
    "right on time",
    "when I was not looking",
    "during my snack",
    "while I was meditating"
  ];

  //we need the below code to randomize the access to the array index by flooring for an integer
  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  //declare variable for the concantenated excuse sentence, puts the sentences together

  let excuse = `${who[whoindex]} ${action[actionindex]} ${what[whatindex]} ${when[whenindex]}`;
  console.log(excuse);
  // changes the content on the HTML
  document.getElementById("excuse").innerHTML = excuse;
};
