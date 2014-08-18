var students = getStudents();

function showAllStudents(students) {
    console.log(students);
}


//Task1
function findStudentsWithFirtstNameBeforeLast(students) {
    var result = _.filter(students, function (student) {
        return student.fname < student.lname;
    });
    return result;
}


function sortStudentsWithFirstNameBeforeLast(students) {
    var filtered = findStudentsWithFirtstNameBeforeLast(students);
    var sorted = _.sortBy(filtered, 'fullName');
    return sorted.reverse(); //Print the students in descending order by full name
}


function printSortedStudentsByLastName() {
    var sorted = sortStudentsWithFirstNameBeforeLast(students);
    _.each(sorted, function (student) {
        return console.log(student.fullName);
    })
}

//Task 2
function filterStudentsByAge(students) {
    var result = _.filter(students, function (student) {
        return student.age >= 18 & student.age <= 24;
    });
    return result;
}

function sortStudentsByAge(students) {
    var filtered = filterStudentsByAge(students);
    var sorted = _.sortBy(filtered, 'age');
    return sorted;
}

function printSortedStudentsByAge() {
    var sorted = sortStudentsByAge(students);
    _.each(sorted, function (student) {
        return console.log(student.fullName + ', Age: ' + student.age);
    })
}

// Task3
function showStudentsWithHighestMarks(students) {
    var sorted = _.sortBy(students, 'marks');
    var firstStudent = _.last(sorted);
    console.log(firstStudent.fullName + ', Marks: ' + firstStudent.marks);
}

// Task7
function findMostCommonFirstAndLastName(students, prop) {
    var maxIndex,
        maxName;

    var countDataStudents = _.countBy(students, function (student) {
        return student[prop];
    });

    maxIndex = _.max(countDataStudents);
    maxName = (_.invert(countDataStudents))[maxIndex];

    console.log(maxName + ', it appears ' + maxIndex + ' times.');
}

/*
var findMostCommonFirstName = function (students) {
        console.log(
            _.chain(students)
                .groupBy(function (student) {
                    return student.fname;
                })
                    .max(function (g) {
                        return g.length;
                    })
                        .first()
                            .value()
                                .firstName);
    };


    var findMostCommonLastName = function (students) {
        console.log(
            _.chain(students)
                .groupBy(function (student) {
                    return student.lname;
                })
                    .max(function (g) {
                        return g.length;
                    })
                        .first()
                            .value()
                                .lastName);
    };
*/

console.log('All students are:');
showAllStudents(students);
console.log('\nTASK1: All students with first name before the last name alphabetically in descending order are:');
printSortedStudentsByLastName();
console.log('\nTASK2: All students with age between 18 and 24 are:');
printSortedStudentsByAge();
console.log('\nTASK3: Student with highest marks is:');
showStudentsWithHighestMarks(students);
console.log('\nTask7: Most common first name is:');
findMostCommonFirstAndLastName(students, 'fname');
console.log('Most common last name is:');
findMostCommonFirstAndLastName(students, 'lname');