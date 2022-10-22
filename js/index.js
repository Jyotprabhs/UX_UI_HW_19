

//function scrollToAnchor(aid){
 //aid.preventDefault();
  //const destination = $("a[name='"+ aid +"']");
    // $('html,body').animate({
      //scrollTop: destination.offset().top
    //},'slow');
 //};

//$(".smooth-link").on('click','.smooth-link', function(){

 //scrollToAnchor('.scroll');
//});
/*var helloWorld='Hello World!';
console.log(helloWorld);

 $("#smooth-scroll").css("color","red");
$("#smooth-scroll").html("New HTML here");


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#smooth-scroll").on('click', function() {

    // Make sure this.hash has a value before overriding default behavior
     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, '800');
  });
});*/
function myFunction() {
  document.documentElement.style.scrollBehavior = "smooth";
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#smooth-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});