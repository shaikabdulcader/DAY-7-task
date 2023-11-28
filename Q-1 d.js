var input = new XMLHttpRequest();

input.open("GET", "https://restcountries.com/v3.1/all");

input.send();

input.onload = function () {
    var countries = JSON.parse(input.response);

    // Calculate total population using reduce function
    var totalPopulation = countries.reduce(function (accumulator, country) {
        return accumulator + (country.population);
    },0);

    console.log("Total Population:", totalPopulation);
};

