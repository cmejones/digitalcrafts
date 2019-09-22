// Write a function "coolCities" which takes an array of city Objects
// and returns a new array containing only those cities whose temperature is
// cooler than 70 degrees.

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 90.0 },
    { name: 'Michigan', temperature: 52.0 },
    { name: 'Florida', temperature: 90.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 },
    { name: 'Portland', temperature: 60.0 }
  ];
 
var coolCities = function (items) {
    var foundCoolCities = [];
    for (var i=0; i<cities.length; i++) {
        var city = items[i];
        if (city.temperature < 70) {
            foundCoolCities.push(city.name);
        }
    }
    return foundCoolCities;
};

var results = coolCities(cities);

console.log(results);
