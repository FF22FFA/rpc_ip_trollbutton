const bigBlueButton = document.getElementById('big-blue-button');

bigBlueButton.addEventListener('click', () => {
    bigBlueButton.style.display = 'none'; // hide the button
    // trigger the next script here
    console.log('Button clicked!');
    // you can call another function or script here
    nextScript(); // example
});

function nextScript() {
    // your next script code here
    console.log('Next script triggered!');
}
