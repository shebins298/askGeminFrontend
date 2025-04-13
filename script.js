
async function sendPrompt() {
  const prompt = document.getElementById("prompt").value;
  const responseDiv = document.getElementById("response");
  responseDiv.innerText = "Loading...";

  try {
    const res = await fetch("https://your-backend-url.onrender.com/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    if (data.response) {
      responseDiv.innerText = data.response;
    } else {
      responseDiv.innerText = "Error: " + data.error;
    }
  } catch (err) {
    responseDiv.innerText = "Fetch error: " + err.message;
  }
}
    