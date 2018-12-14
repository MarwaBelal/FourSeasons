/*var matches = [];
var searchEles = document.getElementsByClassName("category")[0];
var numButtons = searchEles.getElementsByTagName("button").length;

*/
function displayOL(x) {
	var str = "ul"
	str = str + x
	
	console.log(str);
	var x1 = document.getElementById(str);
  if (x1.style.display === "block") {
        x1.style.display = "none";
    } else {
        x1.style.display = "block";
    }

}
