

function calculatecost(...num) {
  let cost = num.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  console.log(`The Total cart value is ${cost}`);
}

calculatecost(10, 20, 30, 40);
calculatecost(182, 2343, 123, 422, 9238, 123, 219, 232);
