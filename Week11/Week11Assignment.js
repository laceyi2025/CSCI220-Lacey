//Create the list item and puts input into that item and presents in on the screen 
function addListItem()
{
    var newListItem = document.createElement("li");
    document.getElementById("inputListItems").value="";
    var newPosition = document.createTextNode(newListText);
    newListItem.appendChild(newPosition);
    
//Makes sure there is something in the input box
    if (newListText === '')
    {
        alert("There needs to be an entry.");
    } 
    else
    {
        document.getElementById("unorderedList").appendChild(newListItem);
    }

    var newListText = document.createTextNode("textInput").value;
}

//Allows the user to click the text and cross through it to mark it off
var listItem = document.querySelector('ul');
listItem.addEventListener('click', function(select) 
{
    if (select.target.tagName == 'LI') 
     {
     select.target.classList.toggle('checked');
     }
}, false);

//Allows the list to be cleared when the function is called
function clearList()
{
    var clearList = document.getElementById("unorderedList");
    while(clearList.firstChild) clearList.removeChild(clearList.firstChild);
}

