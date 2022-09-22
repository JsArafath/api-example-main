const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayData(data))
}

const displayData = counties => {
    counties.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <h5> Capital: ${country.capital ? country.capital[0] : "No Capital"}</h5>
            <button onclick="loadDetails('${country.cca2}')">Details</button>
        `;

        document.getElementById('countries-container').appendChild(div);
    });
}

const loadDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`; //Dynamic variable only works in template string
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data))
}

const displayCountryDetails = (data) => {
    console.log(data);
    document.getElementById('country-details').innerHTML = `
        <h3>Country: ${data[0].name.common} </h3>
        <img src="${data[0].flags.png}"></img>
    `;
}

loadCountries();