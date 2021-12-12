function saveTextAsFile() {
	let textToWrite = document.getElementById('textArea').value;
	let textFileAsBlob = new Blob([textToWrite], {
	  type: 'text/plain'
	});
	let fileNameToSaveAs = "Anxiety.text";
 
	let downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null) {
	  // Chrome allows the link to be clicked
	  // without actually adding it to the DOM.
	  downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	} else {
	  // Firefox requires the link to be added to the DOM
	  // before it can be clicked.
	  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
	  downloadLink.onclick = destroyClickedElement;
	  downloadLink.style.display = "none";
	  document.body.appendChild(downloadLink);
	}

	downloadLink.click();

	let lowest=1.00
	let highest=5.0
	let levelOfStress=''

   for(let stressLevel=lowest; stressLevel<=highest;stressLevel+=0.5){
	  levelOfStress+='<option>'+stressLevel+'</option>';

	   }
   
   let descriptionDiv=document.getElementById('firstParagraph')
	descriptionDiv.innerHTML='After  You have written down your Problems, rate how stressed are you still?'
	   
   let stressLevelDiv=document.getElementById('stressLevel')
	stressLevelDiv.innerHTML=levelOfStress
   

  }
 
  let button = document.getElementById('save');
  button.addEventListener('click', saveTextAsFile);
  