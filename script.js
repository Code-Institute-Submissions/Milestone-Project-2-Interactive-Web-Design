// --- Start of Dice Game Script (idea Inspiration from source > https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/)

var name1;
var name2;
var randomDiceNumber1;
var randomDiceNumber2;
//Function to capture players' names
function rollFunction()
{
//Checking that names are not set so as not to try and set the values again
if (name1 == undefined && name2 == undefined) {
    //Checking that the name fields are not empty
    if (document.getElementById('name1').value != "" && document.getElementById('name2').value != "") {
    //Caputuring player 1 name
    name1 = document.getElementById('name1').value;
    document.getElementById('playerParagraph1').innerHTML =  name1;

    //Removing the input field <div> for player 1
    document.getElementById("input-name1").remove();
    player1Image();

    //Capturing player 2 name
    name2 = document.getElementById('name2').value;
    document.getElementById('playerParagraph2').innerHTML = name2;

    //Removing Dthe input field <div> for player 2
    document.getElementById("input-name2").remove();
    player2Image();

      }
} else {
player1Image();
player2Image();
}



//Pop up message set to blue for every message (this is in place so as to be abble to load a red color message when asking players to insert their names)
document.getElementById("output").style.color = "blue";

  //Pop up message for the winner(s)!
  if (randomDiceNumber1 > randomDiceNumber2) {
    document.getElementById('output').innerHTML ="Woo! " + name1 + ", you're the winner!";
  }
  else if (randomDiceNumber2 > randomDiceNumber1) {
    document.getElementById('output').innerHTML ="Crazy! " + name2 + ", you're the bomb!";
  }
  else if (randomDiceNumber1 == undefined && randomDiceNumber2 == undefined) {
    document.getElementById("output").style.color = "red";
    document.getElementById('output').innerHTML="Please enter your names!";
  }else {
    document.getElementById('output').innerHTML="You guys both rock! 'Rock, paper, scissors' or another round?";
  }
}


//Chaning Player 1 dice image to match the random diceNumber
function player1Image(){
  //Number + Image for Player 1
  randomDiceNumber1 = diceNumber(); //Generating a random number between 1-6. Resource > https://www.w3schools.com/JSREF/jsref_random.asp
  var randomImage1 = "Image_" + randomDiceNumber1 + ".png"; //Generating a randon image from Image_1.png - Image_6.png from the assets folder and concatenating with the random number generating above
  var randomImageSource1 = "assets/" + randomImage1;
  var player1Image = document.getElementsByClassName("player1Image")[0]; //Source > https://www.w3schools.com/JSREF/met_document_queryselectorall.asp
  player1Image.setAttribute("src", randomImageSource1);
}

//Chaning Player 2 dice image to match the random diceNumber
function player2Image(){

// Number + Image for Player 2
randomDiceNumber2 = diceNumber();
var randomImage2 = "Image_" + randomDiceNumber2 + ".png";
var randomImageSource2 = "assets/" + randomImage2;
var player2Image = document.getElementsByClassName("player2Image")[0];
player2Image.setAttribute("src", randomImageSource2);
}

//Creating a random number between 1-6
function diceNumber(){
numberRandom = Math.round(Math.random()*6);
//Adding an if statement for Math.round(Math.random()*6) to not equal to 6
if (numberRandom != 6){
  numberRandom+= 1;
} else { numberRandom = 6;
}
return numberRandom;
}

// --- End of Dice Game Script




// --- Start of Back to top Button source > https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();} ;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// --- End of Back to top Button



// --- Start of Form Validation MB Bootstrap - https://mdbootstrap.com/docs/jquery/forms/validation/
(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {

//scrolls contact in to view when submit is pressed
var  contact = document.getElementById("contact");
  contact.scrollIntoView();


//checks validation state
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
//Removes the form after succesful submission
if (form.checkValidity() === true) {
  var  elmnt = document.getElementById("form_group");
elmnt.style.display = 'none';
}


        }, false);
      });
    }, false);
  })();

// --- End of Form Validation
