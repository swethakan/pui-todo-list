function toggleItem(item) {
    console.log(item.parentNode.classList);
    if(item.checked){
        // item.parentNode.style.textDecoration = "line-through";
        item.parentNode.classList.add ("complete");
    } else{
        // item.parentNode.style.textDecoration = "";
        item.parentNode.classList.remove ("complete");
    }
}

function deleteListItem(item) {
    const listItem = item.parentNode;
    console.log(listItem);
    console.log(listItem.parentNode);

    listItem.parentNode.removeChild(listItem);
}
function addListItem(){

    const list = document.getElementById("todo-list");
    const itemInput = document.getElementById("new-list-item");
    
    const newItem = document.createElement("li");
    

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("onclick", "toggleItem(this)");

    const itemLabel = document.createElement("label");
    itemLabel.appendChild(document.createTextNode(itemInput.value));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("onclick", "deleteListItem(this)");
    deleteButton.appendChild(document.createTextNode("x"));

    newItem.appendChild(checkbox);
    newItem.appendChild(itemLabel);
    newItem.appendChild(deleteButton);

    newItem.classList.add("todo-list-item");
    list.appendChild(newItem);

}