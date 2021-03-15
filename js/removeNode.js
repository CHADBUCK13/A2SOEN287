//Remove remove grandparent node of button
function removeNode(item){

    var div = item.parentNode.parentNode;
    div.remove();

    updateSummary();
}