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
