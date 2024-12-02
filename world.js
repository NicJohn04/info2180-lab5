document.getElementById("lookup").addEventListener("click", async function() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Loading...";
    try {
        const response = await fetch("http://localhost/info2180-lab5/world.php");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        resultDiv.innerHTML = data;
    } catch (error) {
        resultDiv.textContent = "Failed to fetch data. Please try again later.";
        console.error("Error fetching data:", error);
    }
});