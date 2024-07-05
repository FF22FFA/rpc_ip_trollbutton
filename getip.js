<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IP Address</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
      background-color: black;
      color: white;
    }
    #ipAddress {
      font-size: 148px;
      font-weight: bold;
      color: #007bff;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <pre id="ipAddress">Loading...</pre>
  </div>

  <script>
    async function fetchIPAddress() {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const ipAddress = data.ip;
        document.getElementById('ipAddress').textContent = ipAddress;
        document.title = ipAddress;
      } catch (error) {
        console.error('Error fetching IP address:', error);
        document.getElementById('ipAddress').textContent = 'Error fetching IP address';
      }
    }

    // Fetch IP address on page load
    window.onload = function() {
      fetchIPAddress();
    };
  </script>
</body>
</html>
