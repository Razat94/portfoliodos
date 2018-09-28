// Get the modal
var modal = document.getElementById('myModal');;


// Get the image and insert it inside the modal
var img;
var modalImg = document.querySelectorAll(".myModal-content");

function getModal (imageModal) {
	img = document.getElementById(imageModal);
	modal.style.display = "inline-block";
    modalImg[0].src = img.src;
	document.getElementById("hamburgerIcon").style.position = "static";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
	document.getElementById("hamburgerIcon").style.position = "relative";
}