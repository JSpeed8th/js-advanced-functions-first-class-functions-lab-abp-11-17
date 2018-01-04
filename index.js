const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1] ];
  };

const returnLastTwoDrivers = function (drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1] ];
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function (integer) {
    return integer * integer;
  }
};

const fareDoubler(fare * 2) = createFareMultiplier();


function selectDifferentDrivers (drivers, fn) {
  return fn(drivers);
}
