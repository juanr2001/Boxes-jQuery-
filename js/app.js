//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

// "this won't do us much good because this is just a string."
// "We want to actually make this a jQuery representation of the object."
//       var overlay = "<div id="overlay"></div>";

//jQuery allows you to create a DOM element which isn't part
//of the document yet, yet still use it in your jQuery code
//jquery representation of a the object. I used the dollar sign to state that is a jquery representation object, but I can put something else other than the dollar sign.
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>")


$overlay.append($image); //An image to overlay
$overlay.append($caption); //A camption to overlay
$("body").append($overlay); //Add overlay

//Capture the click event on a linkt to an image
$("#imageGallery a").click(function(event){

    event.preventDefault(); //prevent browser default when clicking an object.
    var imageLocation = $(this).attr("href");
    //update overlay with the image linked in the link, this best practice for optimization
    $image.attr("src", imageLocation);
    $overlay.show();  //Show the overlay.

    //get childs alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
    $overlay.hide(); //hide the overlay.
});

