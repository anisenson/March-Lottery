const namesArray = []; // Array to store names

function addName() {
    const nameInput = document.getElementById('nameInput'); // Get the input element
    const name = nameInput.value.trim(); // Get the trimmed value of the input

    if (name !== '') {
        namesArray.push(name); // Add the name to the array
        displayNames(); // Call the displayNames function to update the list
        nameInput.value = ''; // Clear the input field after adding the name
    } else {
        alert('Please enter a name.'); // Show an alert if the name is empty
    }
}

// Function to display names in the list
function displayNames() {
    const nameList = document.getElementById('nameList'); // Get the list element
    nameList.innerHTML = ''; // Clear the previous list

    for (let i = 0; i < namesArray.length; i++) {
        // Loop through the names array
        const name = namesArray[i]; // Get the current name

        const li = document.createElement('li'); // Create a new list item element
        li.className = 'list-group-item'; // Set the class for the list item

        const span = document.createElement('span'); // Create a new span element
        span.textContent = name; // Set the text content of the span to the name

        li.appendChild(span); // Append the span to the list item
        nameList.appendChild(li); // Append the list item to the list
    }
}

// Event listener for the button click
document.getElementById('addNameBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    addName(); // Call the addName function
});

// Event listener for the Enter key press
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    addName(); // Call the addName function
});
