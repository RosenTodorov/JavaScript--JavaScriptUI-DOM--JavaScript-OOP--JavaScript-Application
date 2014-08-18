var animals = getAnimals();

function showAllAnimals(animals) {
    _.each(animals, function (animal) {
        return console.log('Name: ' + animal.name + ', Specie: ' + animal.specie + ' , Legs:' + animal.legs);
    })
}

function groupBySPecies(animals) {
    var grouped = _.groupBy(animals, 'specie');
    return grouped;
}

function sortAnimalsByLegs(groupedAnimals) {
    var sorted = _.sortBy(groupedAnimals, function (animal) {
        return animal[0].legs;
    });
    console.log(sorted);
}

function totalNumberOfLegs(animals) {
    var legs = _.reduce(animals, function (memo, animal) {
        return memo + animal.legs;
    }, 0);
    console.log(legs);
}

/*
  var getTotalNumberOfLegs = function (animals) {
        var totalLegs = _.chain(animals).map(function (a) {
            return a.legsCount
        })
            .reduce(function (memo, num) {
                return memo + num
            })
                .value();


        console.log(totalLegs);
    };
*/

console.log('All animals are:');
showAllAnimals(animals);
console.log('\nTASK4: Grouped by species and sorted by number of legs ascending:');
sortAnimalsByLegs(groupBySPecies(animals));
console.log('\nTASK5: Total number of legs is:');
totalNumberOfLegs(animals);
