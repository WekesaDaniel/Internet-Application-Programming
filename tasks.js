// tasks.js

document.addEventListener("DOMContentLoaded", function() {
    var submit = document.getElementById("submit");
    var newTask = document.getElementById("task");
    var list = document.getElementById("tasks");

    submit.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default form submission

        if (newTask.value.trim() !== "") {
            // Create list item
            var myList = document.createElement("li");
            myList.textContent = newTask.value.trim(); // Use textContent to set text
            list.appendChild(myList);

            // Clear input field
            newTask.value = "";

            return false;
        }
    });
});
