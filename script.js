// Get DOM elements
const button = document.getElementById("enter");
const clearListButton = document.getElementById("clearlist");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

// Function to create a new list element
function createListElement() {
    if (input.value.trim() !== "") {
        // Create list item
        const li = document.createElement("li");
        li.textContent = input.value;

        // Create delete button
        const deleteButton = document.createElement("i");
        deleteButton.classList.add("fa", "fa-trash");
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        ul.appendChild(li);
        input.value = "";
    }
}


function addToListAfterEnter(event) {
    if (event.key === "Enter") {
        createListElement();
    }
}


function toggleTaskCompletion(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("taskDone");
    }
}


function clearList() {
    ul.innerHTML = "";
}

button.addEventListener("click", createListElement);
input.addEventListener("keypress", addToListAfterEnter);
clearListButton.addEventListener("click", clearList);
ul.addEventListener("click", toggleTaskCompletion);
