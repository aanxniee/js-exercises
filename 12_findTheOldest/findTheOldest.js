const findTheOldest = function(p) {
    return p.reduce((oldest, current) => {
        const oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = findAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge < currentAge ? current : oldest;
    })
};

const findAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};


// Do not edit below this line
module.exports = findTheOldest;
