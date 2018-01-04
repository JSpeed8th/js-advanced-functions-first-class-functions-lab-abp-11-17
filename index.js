const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1] ];
  };

const returnLastTwoDrivers = function (drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1] ];
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare, multiplyer) {
  return function (fare) {
    return fare * multipler;
  }
};

const fareDoubler = createFareMultiplier();


function selectDifferentDrivers (drivers, fn) {
  return fn(drivers);
}
