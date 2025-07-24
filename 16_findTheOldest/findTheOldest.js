const findTheOldest = function(people) {
    let sorted = people.sort((a, b) => {
        let ageA, ageB;
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = 2025;
        }
        if (b.yearOfDeath === undefined) {
            b.yearOfDeath = 2025;
        }
        ageA = a.yearOfDeath - a.yearOfBirth;
        ageB = b.yearOfDeath - b.yearOfBirth;
        return ageA - ageB;
    });
    // console.log(people[people.length - 1].name);
    return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
