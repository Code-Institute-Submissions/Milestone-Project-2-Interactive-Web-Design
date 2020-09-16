# Interactive Web Development Milestone Project - Dice Game!

This project was built on the goal of allowing the end user to interact with the website. The idea of the website if a Dice Virtual Game! Two players can insert their names and roll the virtual dice for as many rounds as they wish, refreshing the page to start a new game. The website also allows getting in touch via form - this can be for any purposes including: leaving feedback, report any bugs, etc.

# UX

This website has the end goal of letting the end user(s) have fun while playing the game! The game can be played for fun alone, or to draw a winner in a bet. The site is designed to include all necessary information and features, to allow the user to easily navigate through the various sections, find instructions as well as interact with input fields and buttons, receiving live feedback.

Key experiences which account for a seamless user experience as part of this project:
* As a user, I want to easily navigate through the various sections of the website, (i.e. have a tree structure navigation), and be able to return to the initial starting point at any stage.
* As a user,  looking to have fun while playing the game, I want to easily get access to instructions and be guided through the steps
* As a user, I want to have the option to leave feedback and get in touch with the creator of the game.
* As a user, I want to click on the buttons expecting them to perform an action.
* As a user, I want to be notified if any information I'm inserting for input fields, isn't valid.
* As a user, I want to be notified on the winner while playing the game.

# Features

Existing Features
* Navigation - allows users to access the various sections of the website. Adapted to both desktop and mobile/tablet, with a hamburger menu version for mobile. 
* Back to top button - allows users to return to the initial starting point at any stage of their navigation process. Source > https://www.w3schools.com/howto/howto_js_scroll_to_top.asp.
* Buttons - allow users to perform an action via clicking a button. Buttons are in place for navigation through sections of the site, playing the game, i.e. roll the dice as well as submit data to a form. 
* Input fields - as part of playing the game, we have input fields for the players’ names which dynamically update on the page and render on the pop up message notifying on who the winner is. Input fields expect a value before the button will run the function on rolling the dice. 
* Contact Form - allows users to get in touch by submitting a form which indicates whether any information was not filled in correctly (i.e invalid email address). Validation script source > https://mdbootstrap.com/docs/jquery/forms/validation/

Features Left to Implement
* The option to start a new game on the click of a button instead of refreshing the page.
* Work on implementing a solution for collecting form submission data, i.e. POST to a database.

# Technologies Used
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - this project uses Hypertext Markup Language for its markup.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - this project uses Cascading Style Sheets as the style language to describe the presentation of the markup.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) - this project uses JavaScript for dynamic elements (i.e. input field, on click events, back to top button, form validation).
* [Bootstrap 4.5.2](https://getbootstrap.com) - this project uses the Bootstrap framework to automate the responsiveness of the website.
* [MDB](https://mdbootstrap.com) - the project uses the MDB framework for implementing features.
* [JQuery](https://jquery.com) - the project uses JQuery to simplify DOM manipulation.
* [Jasmine](https://jasmine.github.io/) - the project uses the Jasmine framework for automated testing.

# Testing

* Features
1. Navigation: tested that the links in the navigation are not broken and work as expected.
2. Buttons: tested that button links are not broken and redirect as expected.
3. Input fields: tested input fields validation.

  - Player names input fields: run by the JS function rollFunction https://github.com/ernestina404/Milestone-Project-2-Interactive-Web-Design/blob/master/script.js
  1. Proceeded to click on the roll the dice button without inserting any value for the names input fields > error message "Please enter your names!" appears.
  2. Inserted a value for one of the fields only > error message "Please enter your names!" appears.
  3. Created an automated test using the Jasmine Framework to ensure the names are not defined when starting the game > https://github.com/ernestina404/Milestone-Project-2-Interactive-Web-Design/blob/master/Testing_Jasmine/specs/testing.js
  
  - Input fields on the form
  1. Clicked on the "Send" button without filling in any of the input fields > error messages appeared under each fields indicating a value is expected.
  2. Inserted a value for one field only > error messages for the unfilled fields appeared indicating a value is expected.
  3. Inserted values for two of the three fields only > error message for the unfilled field appeared indicating a value is expected.
  4. For the email field type, inserted a text value without folling the format example@domain.com > error message appeared indicating the email address is incorrect.
  
4. Button to roll the dice running on the JS function rollFunction: used the Jasmine framework to conduct tests on making sure the number of the dice is a random number between 1-6 > https://github.com/ernestina404/Milestone-Project-2-Interactive-Web-Design/blob/master/Testing_Jasmine/specs/testing.js.
  1. Clicking the button numerous times to ensure all numbers randomly generated are between 1-6 - fixed a bug on rendering 7 with adding an if statement on the diceNumber JS function.
  2. Ensured the random number is correctly concatenated within the function to render the respective image, i.e. number 5 would render an image respective to a dice of 5. 
  3. Ensured the respective message pops up to inform on the winner. 
  4. Ensured the player names are not removed from the page unless the page is reloaded, to allow for the players to run through as many rounds as they wish. A new game is triggered upon refreshing the page.

5. Back to top button: ensured the back to top button is hidden by default and only appears as scroll through the site.


# Deployment
This project is deployed with GitHub Pages - selected the master branch to enable GitHub Pages for this repository.

# Credits
* Other
Idea inspiration > https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/
Form validation > https://mdbootstrap.com/docs/jquery/forms/validation/
Back to top button script > https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
Navigation > https://getbootstrap.com/docs/4.5/components/navbar/
* Media
Images as part of the site are created by myself.

# Acknowledgements
I received inspiration for starting to work on this project by the Code Institute project suggestions for "User Centric Frontend Development Milestone Project" as well as from researching through virtual game ideas. This source in particular > https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/ described the concept behind building a dice game clearly - I took inspiration from it and added extra functionality. 
