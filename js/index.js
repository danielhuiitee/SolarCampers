

$(document).ready(function() {


	var modal = document.getElementById("imgModal");

	//var img = document.getElementById("myImg");
	var modalImg = document.getElementById("imgModalCurr");
	var captionText = document.getElementById("caption");

	const img = document.getElementsByClassName("image");
	for(var a = 0; a < img.length; a++) {
	    img[a].addEventListener("click", function(el) {
	          modal.style.display = "block";

	          var src=this.src.substring(
			    this.src.lastIndexOf("/") + 1, 
			    this.src.lastIndexOf(".")
			  );

			  console.log()

			  modalImg.src = "images/full-resolution/" + src + ".jpg";
			  captionText.innerHTML = this.alt;
	    }, false)
	}


	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}

	// if modal is open and clicked on then close it
	modal.onclick = function() {
	  if(this.style.display == "block") {
	  	this.style.display = "none";
	  }	
	}
});