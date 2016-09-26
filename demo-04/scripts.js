var nodes = document.getElementsByTagName("*");
console.log("Cantidad total: " + nodes.length + " ");
for (var i=0; i<nodes.length; i++) {
    console.log(nodes[i].tagName + " ");
}