var input = new XMLHttpRequest();

input.open("GET", "https://restcountries.com/v3.1/all");

input.send();

input.onload = () => {
    var countries = JSON.parse(input.response);

    // Filter countries from Asia
    var asiaCountries = countries.filter(country => country.region === "Asia");

    console.log(asiaCountries);
};



