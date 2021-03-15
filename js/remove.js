//makes sure document is ready, then adds all event listeners
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

//adds all event listeners
function ready() {
    //adds listener to the delete buttons
    var removeUserRowButtons = document.getElementsByClassName('btn-remove')
    for (var i = 0; i < removeUserRowButtons.length; i++) {
        var button = removeUserRowButtons[i]
        button.addEventListener('click', removeUserRow)
    }

    //adds listener to the remove check boxes
    var removeCheckBoxes = document.getElementsByClassName('removeBoxes')
    for (var i = 0; i < removeCheckBoxes.length; i++) {
        var boxes = removeCheckBoxes[i];
        boxes.addEventListener('click', selectRowToBeDeleted)
    }

    //adds listener to the main delete box button (the one that deletes all selected)
    var removedCheckedRowsButton = document.getElementsByClassName('mainDeleteButton')
    removedCheckedRowsButton[0].addEventListener('click', removeCheckedRows)

    //adds listener to the checkbox that selects all rows
    var selectAllBoxes = document.getElementsByClassName("selectAll")
    selectAllBoxes[0].addEventListener('click', selectAll)

    //adds listener to the green add button
    var addChecked = document.getElementsByClassName("addCheckedRows")
    addChecked[0].addEventListener('click', addSelected)
}

//method that removes a row when one of the delete buttons is clicked
function removeUserRow(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
}

//method that will remove all rows that are currently checked
function removeCheckedRows() {
    for (var i = 0; i < selectedRows.length; i++) {
        selectedRows[i].remove();
    }
    selectedRows = new Array;
    document.getElementsByClassName("selectAll")[0].checked = false;
}   

//
var selectedRows = []; 

//method to send specific row to be deleted when pressing delete selected button
function selectRowToBeDeleted(event) {
    var boxClicked = event.target;
    selectedRows.push(boxClicked.parentElement.parentElement)
    console.log(boxClicked.parentElement.parentElement)

    if (!event.target.checked) {
        selectedRows.pop();
        
        for (var i = 0; i < selectedRows.length; i++) {
            if (selectedRows[i] == boxClicked.parentElement.parentElement) {
                selectedRows.splice(i, 1)
            }
        }
    }
}

//method to send all rows to be deleted when pressing delete selected button
function selectAll(event) {
    var boxes = document.getElementsByClassName("removeBoxes")

    for (var i = 0; i < boxes.length; i++) {
        selectedRows.push(boxes[i].parentElement.parentElement)
        boxes[i].checked = true;
        //adds all rows to be deleted

        if (!event.target.checked) {
            selectedRows = new Array;
            for (var i = 0; i < boxes.length; i++) {
                boxes[i].checked = false;
            }
            //if the checkbox is unchecked then empties the array of things to be deleted
        }
    }
    
}

//adds all the selected rows at the end of the table
function addSelected(event) {
    var length = selectedRows.length;
    for (var i = 0; i < length; i++) {
        var name = selectedRows[i].getElementsByClassName("user-name")[0].innerHTML
        var id = selectedRows[i].getElementsByClassName("user-id")[0].innerHTML
        var email = selectedRows[i].getElementsByClassName("user-email")[0].innerHTML
        var country = selectedRows[i].getElementsByClassName("user-country")[0].innerHTML
        var city = selectedRows[i].getElementsByClassName("user-city")[0].innerHTML
        var address = selectedRows[i].getElementsByClassName("user-address")[0].innerHTML
        addRow(name, id, email, country, city, address);
    }

    //adds listener to the delete buttons
    var removeUserRowButtons = document.getElementsByClassName('btn-remove')
    for (var i = 0; i < removeUserRowButtons.length; i++) {
        var button = removeUserRowButtons[i]
        button.addEventListener('click', removeUserRow)
    }

    //adds listener to the remove check boxes
    var removeCheckBoxes = document.getElementsByClassName('removeBoxes')
    for (var i = 0; i < removeCheckBoxes.length; i++) {
        var boxes = removeCheckBoxes[i];
        boxes.addEventListener('click', selectRowToBeDeleted)
        boxes.checked = false; //unchecks every box
    }
    //empties selected array so there's no duplicates
    document.getElementsByClassName("selectAll")[0].checked = false;
    selectedRows = new Array;
}

//function that handles adding all the elements of the row and creating it
function addRow(name, id, email, country, city, address) {
    var row = document.createElement('tr')

    var rowContent = `
        <td id = "Zoro"><input type = "checkbox" value="2" class="removeBoxes"> </td>
        <td class="user-name"><h5>${name}</h5></td>     
        <td class="user-id"><h5>${id}</h5></td>
        <td class="user-email"><h5>${email}</h5></td>
        <td class="user-country"><h5>${country}</h5></td>
        <td class="user-city"><h5>${city}</h5></td>
        <td class="user-address"><h5>${address} </h5></td>
        <td id = "rightmargin"><form> 
            <a href="Backstore(P10).html">
                <button  type = "button" id = "edit"> Edit</button>
            </a>
            <button type = "button" id = "delete" class="btn-remove">
                Delete
            </button></form>
        </td>
    `

    row.innerHTML = rowContent;
    var rowItems = document.getElementById("user-table")
    rowItems.append(row);
    console.log("here is row")
    console.log(row)
    selectedRows.push(row);
}
//make sure check are visually correct, also, finish p10 just write ...