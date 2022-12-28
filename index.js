// Code your solution here

// const drivers = ['D1', 'D2', 'D3']; // Example test array

// const driverInfo = [
//     {name: "name1", hometown: 'Denver'},
//     {name: "name2", hometown: 'Dallas'},
//     {name: "name3", hometown: 'Anaheim'}
// ]

function findMatching(array, string) {
    return array.filter(element => element.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(element => element.substring(0, 1) === string.substring(0, 1));
}

function matchName(array, string) {
    return array.filter(element => element.name === string)
}

// findMatching(drivers, "D1");
// console.log(findMatching(drivers, "D1"));

// fuzzyMatch(drivers, "D1");
// console.log(fuzzyMatch(drivers, "D1"));

// matchName(driverInfo, "name1");
// console.log(matchName(driverInfo, "name1"));