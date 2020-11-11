

$(document).ready(function() {
	var modal = document.getElementById("imgModal");

	//var img = document.getElementById("myImg");
	var modalImg = document.getElementById("imgModalCurr");
	var captionText = document.getElementById("caption");

	const img = document.getElementsByClassName("image");
	for(var a = 0; a < img.length; a++) {
	    img[a].addEventListener("click", function(el) {
	          modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			  console.log("cliekd");
	    }, false)
	}


	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}
});