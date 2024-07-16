document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.getElementById('greeting');
    const changeColorButton = document.getElementById('changeColorButton');
    const resetColorButton = document.getElementById('resetColorButton');
    const changeBgColorButton = document.getElementById('changeBgColorButton');

    changeColorButton.addEventListener('click', function() {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // Change the text color
        greeting.style.color = randomColor;
    });

    resetColorButton.addEventListener('click', function() {
        // Reset the text color to black
        greeting.style.color = 'black';
    });

    changeBgColorButton.addEventListener('click', function() {
        // Generate a random background color
        const randomBgColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // Change the background color of the body
        document.body.style.backgroundColor = randomBgColor;
    });
});
