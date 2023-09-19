// Code your solution in this file!
function distanceFromHqInBlocks(a) {
  //returns the number of blocks given a value
  let ans;
  if (a >= 42) {
    ans = a - 42;
  } else ans = 42 - a;

  return ans;
}

// Code your solution in this file!
function distanceFromHqInFeet(a) {
  //returns the number of blocks given a value
  let distanceInFeet;
  if (a >= 42) {
    distanceInFeet = distanceFromHqInBlocks(a) * 264;
  } else distanceInFeet = distanceFromHqInBlocks(a) * 264;

  return distanceInFeet;
}

function distanceTravelledInFeet(start, end) {
  let feetTravelled = distanceFromHqInFeet(end) - distanceFromHqInFeet(start);

  return feetTravelled;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the custome
  let d = distanceTravelledInFeet(start, destination);
  let ans;
  if (d < 400) {
    ans = 0;
  } else if (d > 400 && d < 2000) {
    let l = d - 400;

    ans = l * 0.02;
  } else if (d > 2000 && d < 2500) {
    ans = 25;
  } else {
    ans = "cannot travel that far";
  }
  return ans;
}
