// Everything in this file runs in the BROWSER.

async function checkServer() {
  const response = await fetch("/api/hello");
  const data = await response.json();
  document.getElementById("status").textContent = data.message;
}

checkServer();
