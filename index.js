const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1] ];
  };

const returnLastTwoDrivers = function (drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1] ];
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer, multiplier) {
  return function (integer, 5) {
    return integer * 5;
  }
};

const fareDoubler = createFareMultiplier(integer, 2);


function selectDifferentDrivers (drivers, fn) {
  return fn(drivers);
}
