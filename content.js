(function(){
console.log("Extension Loaded");
function applyBadge() {
	//find badge classes
	var badges = document.querySelectorAll(".badge .icon-description");
	for(var i = 0; i < badges.length; i++) {
		var descriptionNode = document.createElement("P");
		descriptionNode.appendChild(document.createTextNode("Description"));
		badges[i].parentElement.parentElement.parentElement.appendChild(descriptionNode);
		badges[i].parentElement.parentElement.parentElement.style.backgroundColor = "red";
	}
}

applyBadge();
})();