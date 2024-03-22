const namesArray = [] // Array to store names

function addName () {
  const nameInput = document.getElementById('nameInput') // Get the input element
  const name = nameInput.value.trim() // Get the trimmed value of the input

  if (name !== '') {
    namesArray.push(name) // Add the name to the array
    displayNames() // Call the displayNames function to update the list
    nameInput.value = '' // Clear the input field after adding the name
    
  } else {
    alert('Please enter a valid name.') // Show an alert if the name is empty
  }
}