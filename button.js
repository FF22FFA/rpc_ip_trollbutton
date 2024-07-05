const bigBlueButton = document.getElementById('big-blue-button');

bigBlueButton.addEventListener('click', () => {
    bigBlueButton.style.display = 'none'; // hide the button
    console.log('Button clicked!');
    getip(); // Call the getip function from getip.js
    playskibidi(); // Call the playskibidi function from playskibidi.js
});
