document.addEventListener('DOMContentLoaded', function() {
    // Get references to the HTML elements by their IDs
    const greeting = document.getElementById('greeting');
    const changeColorButton = document.getElementById('changeColorButton');
    const resetColorButton = document.getElementById('resetColorButton');
    const changeBgColorButton = document.getElementById('changeBgColorButton');

    // Add an event listener for the 'Change Text Color' button
    changeColorButton.addEventListener('click', function() {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // Change the text color of the greeting element
        greeting.style.color = randomColor;
    });

    // Add an event listener for the 'Reset Text Color' button
    resetColorButton.addEventListener('click', function() {
        // Reset the text color of the greeting element to black
        greeting.style.color = 'black';
    });

    // Add an event listener for the 'Change Background Color' button
    changeBgColorButton.addEventListener('click', function() {
        // Generate a random background color
        const randomBgColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // Change the background color of the body element
        document.body.style.backgroundColor = randomBgColor;
    });
});
