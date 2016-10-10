var nodes = document.getElementsByTagName("*");
var nodesLength = nodes.length;
var result = "Cantidad total: " + nodesLength + " ";
for (var i=0; i<nodesLength; i++) {
	result += nodes[i].tagName + " ";
}
alert(result);