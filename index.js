// Code your solution in this file.


function lowerCaseDrivers(drivers) {
  drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  drivers.map(function(driver) {
    return Object.assign({}, driver, { firstName: "test"})
  });
}