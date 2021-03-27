function addListItem(){
    var textInput = document.getElementById('inputListItems')
    var newListItem = document.createElement('li');
    var newListText = document.createTextNode(textInput)
    newListItem.appendChild(newListText);
    var newPosition = document.getElementsByTagName('ul')[0];
    newPosition.appendChild(newListItem);
}

function clearList(){
    var removeAll = document.getElementsByTagName('li');
    var elementContain = removeAll.parentNode;
    elementContain.removeChild(removeAll);
}
