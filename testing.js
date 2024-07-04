addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
	try {
	  const response = await fetch('https://api.ipify.org?format=json');
	  if (!response.ok) {
		throw new Error('Network response was not ok');
	  }
	  const data = await response.json();
	  const ipAddress = data.ip; // Extract IP address from JSON response
  
	  const htmlContent = generateHTML(ipAddress); // Call function to generate HTML content with IP address
	  return new Response(htmlContent, {
		headers: {
		  'Content-Type': 'text/html',
		},
	  });
	} catch (error) {
	  console.error('Error fetching IP address:', error);
	  const errorHtmlContent = generateErrorHTML(); // Generate HTML for error message
	  return new Response(errorHtmlContent, {
		headers: {
		  'Content-Type': 'text/html',
		},
	  });
	}
  }
  
  function generateHTML(ipAddress) {
	return `
	  <!DOCTYPE html>
	  <html lang="en">
	  <head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>${ipAddress}</title> <!-- Title set to IP address -->
		  <style>
			  body {
				  font-family: Arial, sans-serif; /* Set font family */
				  text-align: center; /* Center align content */
				  padding: 20px; /* Add padding for spacing */
				  background-color: black; /* Set black background */
				  color: white; /* Set text color to white */
			  }
			  #ipAddress {
				  font-size: 148px; /* Adjust font size of IP address */
				  font-weight: bold; /* Set font weight */
				  color: #007bff; /* Set text color */
				  margin-top: 10px; /* Add margin for spacing */
			  }
		  </style>
	  </head>
	  <body>
		  <div class="container">
			  <pre id="ipAddress">Loading...</pre>
		  </div>
  
		  <script>
			  // Function to fetch and display IP address
			  async function fetchIPAddress() {
				  try {
					  const response = await fetch('https://api.ipify.org?format=json');
					  if (!response.ok) {
						  throw new Error('Network response was not ok');
					  }
					  const data = await response.json();
					  const ipAddress = data.ip; // Extract IP address from JSON response
					  document.getElementById('ipAddress').textContent = ipAddress; // Update text content with IP address
					  document.title = ipAddress; // Update title with IP address
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
	`;
  }
  
  function generateErrorHTML() {
	return `
	  <!DOCTYPE html>
	  <html lang="en">
	  <head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Error Fetching IP Address</title>
		  <style>
			  body {
				  font-family: Arial, sans-serif; /* Set font family */
				  text-align: center; /* Center align content */
				  padding: 20px; /* Add padding for spacing */
				  background-color: black; /* Set black background */
				  color: white; /* Set text color to white */
			  }
			  #ipAddress {
				  font-size: 148px; /* Adjust font size of IP address */
				  font-weight: bold; /* Set font weight */
				  color: #ff0000; /* Set text color to red */
				  margin-top: 10px; /* Add margin for spacing */
			  }
		  </style>
	  </head>
	  <body>
		  <div class="container">
			  <pre id="ipAddress">Error fetching IP address</pre>
		  </div>
	  </body>
	  </html>
	`;
  }
