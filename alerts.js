// alerts.js

// Function to handle the alert logic
function handleAlert() {
    // Show alert and wait for user confirmation
    const proceed = confirm("Lower your volume. I'm sorry.");
    
    if (proceed) {
        // If user clicks OK, proceed with fetching IP and playing audio
        fetchIPAddress(); // Trigger IP fetching
        playAudios(); // Trigger audio playback
    } else {
        // If user cancels, do nothing or show another message
        alert("No");
    }
}
