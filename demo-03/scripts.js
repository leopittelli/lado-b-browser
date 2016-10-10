var nodes = document.getElementsByTagName("*");
var nodesLength = nodes.length;
document.write("Cantidad total: " + nodesLength + " ");
for (var i=0; i<nodesLength; i++) {
	document.write(nodes[i].tagName + " ");
}