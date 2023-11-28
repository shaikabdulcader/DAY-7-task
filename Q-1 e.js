var input = new XMLHttpRequest();

input.open("GET", "https://restcountries.com/v3.1/all");

input.send();

input.onload = function () {
    var countries = JSON.parse(input.response);

    // Find and print countries that use US dollars
    var usDollarCountries = countries.filter(function (country) {
        return country.currencies && country.currencies.USD;
    });

    var result = usDollarCountries.map(country => country.name.common)
    console.log(`These Countries are used US dollars as currency:  ${result}`)
};
