var input = new XMLHttpRequest();

input.open("GET", "https://restcountries.com/v3.1/all");

input.send();

input.onload = function () {
    var countries = JSON.parse(input.response);

    // Print details for each country
    countries.forEach(function (country) {
        var name = country.name.common;
        var capital = country.capital;
        var flag = country.flags.png;

        console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });
};
