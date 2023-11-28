var input = new XMLHttpRequest();

input.open("GET", "https://restcountries.com/v3.1/all");

input.send();

input.onload = () => {
    var countries = JSON.parse(input.response);

    // Filter countries with population less than 200,000
    var lessThan2LakhCountries = countries.filter(country => country.population && country.population < 200000);

    console.log(lessThan2LakhCountries);
};
