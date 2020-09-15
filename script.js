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
