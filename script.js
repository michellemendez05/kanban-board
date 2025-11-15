function remove(){
    list = document.getElementById("groceryList");
    last = list.lastElementChild;
    list.removeChild(last);
}

function add(){
    list = document.getElementById("groceryList");
    add = prompt("Add item:");
    li = document.createElement("li");
    li.textContent = add;
    list.appendChild(li);
}