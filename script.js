// Waiting for the DOM to finish loading
$(document).ready(function(){

	var contacts = [];

	var count = 0;

	var addContact = function(newContact){
	  var contactString = ["<li id='", newContact.id, "'class='contact'>", 
	  							"<img src='", newContact.imgUrl, "'>",
	  							"<div>", newContact.name, "</div>",
	  							"<div>", newContact.email, "</div>",
	  							"<div>", newContact.number, "</div>", 
	  							"<span class='edit'>Edit</span><br>",
	  							"<span class='delete'>Delete</span>",
	  							"</li>"].join("");
	  console.log(contactString);

	  $("#contacts").append(contactString);
	  	};
	// $('ul').on('click', '.edit', function(){
	// 	%()
	// })

	$('ul').on('click', '.delete', function(){
    $(this).parent().fadeOut(500, function(){
    $(this).remove(); 
    });
  });
// Now we need to watch for a submit
// event on the form
  $("#new_contact").submit( function(event){
  	// Prevent the page from reloading
  	event.preventDefault();

  	// console.log(this);

  	var name = $("#contact_name").val();
  	var email = $("#contact_email").val();
  	var number = $("#contact_number").val();
  	var imgUrl = $("#contact_image_url").val();

  	console.log(name, email, number, imgUrl);

  	//Reset the form
  	this.reset();

  	//Keeping track of new contacts
  	var newContact = { 	id: count,
  						name: name,
  						email: email,
  						number: number,
  						imgUrl: imgUrl };
  	count += 1;


  	contacts.push(newContact);

  	// Call a function to add our contact to 
  	// the page.
  	addContact(newContact);

  });


});