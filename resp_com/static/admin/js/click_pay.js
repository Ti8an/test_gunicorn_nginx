<script>
    const fetchButton = document.getElementById('fetchButton');
    const resultDiv = document.getElementById('result');

    fetchButton.addEventListener('click', () => {
      // Make a fetch request to the specified URL
      fetch('/pay/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie("csrftoken")
        },
        body: JSON.stringify({
          "existing_id": rowData["existing_id"],
          "email": rowData["email"],
        })
      })
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
          // Handle the fetched data
          resultDiv.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
          // Handle any errors
          resultDiv.textContent = `Error: ${error}`;
        });
    });

    // Helper function to get the CSRF token cookie value
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
  </script>