var sheep,
    rams,
    users = [],
    scores,
    guessedNumber = generateRandomNumbers(4),
    showScores = document.getElementById('scores'),
    showHighScores = document.getElementById('highscores'),
    resultMessage = document.getElementById('result'),
    ramsScore = document.getElementById('rams-score'),
    sheepScore = document.getElementById('sheep-score'),
    newGameButton = document.getElementById('new-game'),
    tryButton = document.getElementById('check'),
    clearCurrentScore = document.getElementById('clear-currentscore'),
    errorMessage = document.getElementById('error-message');

function generateRandomNumbers(digits) {
    var number = "";
    
   //using the formula: var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    number += Math.floor(Math.random() * 9 + 1);

    for (var i = 0; i < digits - 1; i++) {
        var randomNumber = Math.floor(Math.random() * 9);
        if (number.indexOf(generateRandomNumbers) > -1) {
            while (number.indexOf(generateNugenerateRandomNumbersmbers) > -1) {
                generateRandomNumbers = Math.floor(Math.random() * 9);
            }
        }
        number += randomNumber;
    }
    return number;
}

function updateUsers() {
    if (localStorage.getItem('users') !== null) {
        users = JSON.parse(localStorage.getItem('users'));
    }
}

function validateNumber(number) {
    if (isNaN(parseInt(number))) {
        errorMessage.innerHTML = 'It is not a number!';
        ramsScore.innerHTML = "";
        sheepScore.innerHTML = "";
        return false;
    }
    else if (number.length !== 4) {
        errorMessage.innerHTML = 'You must enter a 4-digit number!';
        ramsScore.innerHTML = "";
        sheepScore.innerHTML = "";
        return false;
    }
    else if (number[0] === '0') {
        errorMessage.innerHTML = 'Number can`t start with 0!';
        ramsScore.innerHTML = "";
        sheepScore.innerHTML = "";
        return false;
    }
    else {
        var validInputNumber = true;

        for (var i = 0; i < number.length; i++) {
            for (var j = i + 1; j < number.length; j++) {
                if (number[i] === number[j]) {
                    validInputNumber = false;
                }
            }
        }
        if (!validInputNumber) {
            errorMessage.innerHTML = 'Invalid input. You must enter non-repeating digits!';
            ramsScore.innerHTML = "";
            sheepScore.innerHTML = "";
            return false;
        }
    }
    return true;
}

function updateResult(sheep, rams) {
    ramsScore.innerHTML = 'Rams: ' + rams;

    if (rams >= 2) {
        sheepScore.innerHTML = 'Sheep: ' + (sheep - rams);
    }
    else {
        sheepScore.innerHTML = 'Sheep: ' + sheep;
    }

    if (rams === 4) {
        resultMessage.innerHTML = 'You guessed the number ' + guessedNumber + ' !';
        if (showHighScores.innerHTML === 'Show highscores!') {
            showingResults();
        }
        if (scores < 0) {
            scores = 0;
        }

       addToTopScores(scores);
    }
}

function checkSheepOrRam() {
    var inputNumber = document.getElementById('input-number').value;

    if (validateNumber(inputNumber)) {
        scores -= 10;
        errorMessage.innerHTML = "";
        var sheep = 0;
        var rams = 0;

        for (var i = 0; i < inputNumber.length; i++) {
            if (inputNumber[i] === guessedNumber[i]) {
                rams++;
            }
        }

        for (var i = 0; i < inputNumber.length; i++) {
            if (guessedNumber.indexOf(inputNumber[i]) > -1) {
                sheep++;
            }
        }

        updateResult(rams, sheep);
    }
}

function checkIfUserNameIsValid(username) {
    for (var i = 0; i < users.length; i++) {
        if (users[i] === username) {
            return false;
        }
    }

    return true;
}

function addToTopScores(scores) {
    personName = prompt("Please enter your nickname");
    if (personName === '' || personName === null) {
        personName = 'unnamed';
    }

    var name = personName;

    var nameAndScores = {
        'name': name,
        'scores': scores
    };

    users.push(nameAndScores);

    localStorage.setItem('users', JSON.stringify(users));

    updateScoresInnerHtml();
}

function showingResults() {
    if (showHighScores.innerHTML === 'Show highscores!') {
        updateScoresInnerHtml();
        showHighScores.innerHTML = 'Hide highscores!';
    }
    else {
        showScores.innerHTML = 'Scores:';
        showHighScores.innerHTML = 'Show highscores!';
    }
}

function updateScoresInnerHtml() {
    if (users.length === 0) {
        updateUsers();
    }

    sortUsers('scores');

    showScores.innerHTML = "Scores: ";
    for (var i = 0; i < users.length; i++) {
        showScores.innerHTML +=
            '<br/>' +
            (i + 1) + ') ' +
            users[i].name + ' -> ' +
            users[i].scores + ' scores';
    }
}

function sortUsers(sortBy) {
    var exchangeValues;

    for (var i = 0; i < users.length - 1; i++) {
        for (var j = i + 1; j < users.length; j++) {
            if (users[j][sortBy] > users[i][sortBy]) {
                exchangeValues = users[i];
                users[i] = users[j];
                users[j] = exchangeValues;
            }
        }
    }
}
     
function startNewGame() {
    resultMessage.innerHTML = '';
    ramsScore.innerHTML = 'Rams: 0';
    sheepScore.innerHTML = 'Sheep: 0';
    showScores.innerHTML = 'Scores:';
    guessedNumber = generateRandomNumbers(4);
    console.log(guessedNumber);
    document.getElementById('input-number').value = '';
    scores = 1010;
}

startNewGame();

updateUsers();

newGameButton.addEventListener('click', startNewGame);
tryButton.addEventListener('click', checkSheepOrRam);
clearCurrentScore.addEventListener('click', function () {
    localStorage.clear();
    users = [];
    showScores.innerHTML = 'Scores:';
});
showHighScores.addEventListener('click', showingResults);