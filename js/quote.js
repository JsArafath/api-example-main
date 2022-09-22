const loadQuotes = () => {
    fetch('https://api.kanye.rest/') //kanye rest api for quotes
        .then(response => response.json())
        .then(data => displayData(data))
}

const displayData = (quotes) => {
    document.getElementById('quote').innerText = quotes.quote;
}