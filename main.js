function toggleMenuBar(){
	let dropDown = document.getElementById("dropDown");
	
	if (dropDown.className === "dropDown"){
		dropDown.className += " responsive";
	} else {
		dropDown.className = "dropDown";
	}
}
