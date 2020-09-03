// require statements to read gherkin file
const assert = require('assert');
const { Given, When, Then } = require('cucumber');


// this is the function for the program (the program code)
function isItFriday(today) {
    if (today === "Friday") {
      return "TGIF";
    } else {
      return "Nope";
    }
  }


//each scenario statement is a function with a call back
//you just need to write some code to tell it what to expect
Given('today is {string}', function (givenDay) {
    this.today = givenDay;
  });
  
  When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
  });
  
  Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
  });




