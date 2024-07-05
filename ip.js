async function fetchIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const ipAddress = data.ip;

        // Update tab title with IP address
        document.title = ipAddress;

        // Hide the button and display IP address on the page
        document.getElementById('pressButton').style.display = 'none';
        document.getElementById('ipAddress').textContent = ipAddress;

        // Show Chinese text above IP address
        document.getElementById('chineseText').style.display = 'inline'; // Display Chinese text

        // Start blinking Chinese text (toggle every half second)
        setInterval(() => {
            const chineseText = document.getElementById('chineseText');
            chineseText.style.visibility = (chineseText.style.visibility === 'hidden' ? 'visible' : 'hidden');
        }, 500); // Toggle every half second (500ms)
    } catch (error) {
        console.error('Error fetching IP address:', error);
        alert('Error fetching IP address');
    }
}
