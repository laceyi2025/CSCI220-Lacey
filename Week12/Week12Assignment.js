$('form').css({
    'background-color': '#0277bd',
    'border': '2px solid black',
    'color': 'black'
})

$('input').css({
    'background-color': 'chocolate',
    'color': 'white'
})

$('label').css({
    'color': 'white'
})

$('table').css({
    'background-color': 'chocolate',
    'border-color': '#0277bd',
    'color': 'white'
})
//create the table row and put the name into the table
function fillTableInformation ()
{
    var table = document.getElementById("informationTable");
    var row = table.insertRow(0);
    var name1 = row.insetCell(0);
    var title1 = row.insetCell(1);
    var date1 = row.insertCell(2);
    name1 = document.getElementById("nameInput").value;
    title1 = document.getElementById("titleInput").value;
    date1 = document.getElementById("datePicker").value;
}

if (newName == '' || newTitle == ''|| newDate == '')
{
    alert("There needs to be an entry in all boxes.");
}
else
{
    document.getElementById("informationTable").appendChild(newName)
}
    

