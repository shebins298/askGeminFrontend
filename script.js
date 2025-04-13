async function sendPrompt() {
  const prompt = document.getElementById("prompt").value;
  const responseDiv = document.getElementById("response");
  responseDiv.innerText = "Loading...";

  try {
    // Ensure the API endpoint matches your backend's route
    const res = await fetch("https://askgeminibackend-rdq8.onrender.com/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    // Check if the response is OK (status code 200)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    // Parse the response from the backend
    const data = await res.json();

    // Handle the response from the backend
    if (data.response) {
      responseDiv.innerText = data.response; // Display the response
    } else if (data.error) {
      responseDiv.innerText = "Error: " + data.error; // Show error message
    } else {
      responseDiv.innerText = "Unexpected error: No valid response or error found."; // Handle unexpected responses
    }
  } catch (err) {
    // Display any errors encountered during the fetch process
    responseDiv.innerText = "Fetch error: " + err.message;
  }
}
