// Get the display input field
const display = document.getElementById('display');

// Function to append clicked button value to display
function appendToDisplay(value) {
    // Prevent appending invalid characters
    if (!isNaN(value) || value === '.' || ['+', '-', '*', '/'].includes(value)) {
        display.value += value;
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
        if (isNaN(display.value)) {
            display.value = "Error";
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark');
});

// Sound effect (optional)
function playClickSound() {
    const audio = new Audio('click.mp3');
    audio.play();
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Add click sounds to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', playClickSound);
});
