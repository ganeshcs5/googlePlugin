document.getElementById('callApi').addEventListener('click', async () => {
    const apiUrl = document.getElementById('apiUrl').value;
    const responseBox = document.getElementById('apiResponse');
    
    // Clear the response box before new call
    responseBox.textContent = 'Calling API...';
  
    if (!apiUrl) {
      responseBox.textContent = 'Please enter a valid API URL.';
      return;
    }
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      responseBox.textContent = JSON.stringify(data, null, 2); // Format JSON data
    } catch (error) {
      responseBox.textContent = `Failed to fetch API data: ${error.message}`;
    }
  });
  