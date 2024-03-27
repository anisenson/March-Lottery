// create an array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput') // storing name input element as a variable
    const name = nameInput.value.trim() //get the TRIMMED value of the input box and store in a var
    
    namesArray.push(name) //add the name to the end of the array
    displayNames() //call the displayNames function to update the list
    
    nameInput.value = '' //Clear the input field after adding the name
}

function displayNames() {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = '' //clear out the previous list items

    for (let i = 0; i < namesArray.length; i++){
        const name = namesArray[i]

        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)//adds a span tag nested between every <li> tag (the child)
        nameList.appendChild(li)
    }

}

// Event listener for the Enter key press
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    addName(); // Call the addName function
});

function pickRandomName() {
    const randomNameDiv = document.getElementById('randomName')
    randomNameDiv.textContent = ''

    //Generate and select a random name from names array
    const randomNumber = Math.floor(Math.random() * namesArray.length)
    const randomName = namesArray[randomNumber] 

    randomNameDiv.textContent = randomName

    namesArray.splice(randomNumber, 1)

    displayNames(); 

}


//Event listener for the button click to add a name
document.getElementById('addNameBtn').addEventListener('click', addName)

//Event listener for the button click to select and diplay a rndm name
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)


