async function sendPrompt() {
  const prompt = document.getElementById("prompt").value;
  const responseDiv = document.getElementById("response");
  responseDiv.innerText = "Loading...";

  try {
    const res = await fetch("https://askgeminibackend-rdq8.onrender.com/generate", {  // Corrected URL to /generate
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    // Check if response is OK
    if (!res.ok) {
      // If response is not OK, handle error
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (data.response) {
      responseDiv.innerText = data.response;
    } else if (data.error) {
      responseDiv.innerText = "Error: " + data.error;
    } else {
      responseDiv.innerText = "Unexpected error, no response or error found.";
    }
  } catch (err) {
    responseDiv.innerText = "Fetch error: " + err.message;
  }
}
