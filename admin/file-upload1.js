let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
let clearButton = document.getElementById("clear-file-button");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
	
	clearButton.classList.remove("hidden");
}

clearButton.onclick = () => {
	chosenImage.setAttribute("src", "images/Untitled.png");
	fileName.textContent = "";
	uploadButton.value="";
	
	clearButton.classList.add("hidden");
}

