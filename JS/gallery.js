
function upDate(previewPic){
  var imageDiv = document.getElementById('image');
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

  
	

function unDo(){
  var imageDiv = document.getElementById('image');
  imageDiv.innerHTML = "Hover over and image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
}