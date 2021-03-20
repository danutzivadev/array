var questions = [
    ['How many states are in the United States?', 50],
    ['How many continents are there?', 7],
    ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var icorrectAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var ras;
var rasi;
var incorrect = [];

function print(message) {
   var outputdiv = document.getElementById('output');
   outputdiv.innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === answer) {
        correct[correctAnswers] = questions[i][0];
        correctAnswers += 1;
    } else {
        incorrect[icorrectAnswers] = questions[i][0];
        icorrectAnswers += 1;
    }
}

html = "You got " + correctAnswers + " question(s) right.<br>";
print();

ras = "You answer correct for this question: <br>" ;
correct.forEach(element => ras=ras + element + "<br>");
print(ras);

rasi = "You answer incorrect for this question: <br>" ;
incorrect.forEach(element => rasi=rasi + element + "<br>");
print(html+ras+rasi);










