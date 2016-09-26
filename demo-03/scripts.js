var nodes = document.getElementsByTagName("*");
document.writeln("Cantidad total: " + nodes.length + " ");
for (var i=0; i<nodes.length; i++) {
    document.writeln(nodes[i].tagName + " ");
}