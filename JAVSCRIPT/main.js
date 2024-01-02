// Array of colors
const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

// Get the color box element
const colorBox = document.getElementById("colorBox");
    

// Function to change the background color
const changeBackgroundColor = () => {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * colors.length);
  
  // Get a random color from the array
  const randomColor = colors[randomIndex];
  
  // Set the background color
  colorBox.style.backgroundColor = randomColor;
};

// Attach click event to the color box
colorBox.addEventListener("click", changeBackgroundColor);
