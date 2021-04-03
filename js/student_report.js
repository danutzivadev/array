var message = '';
var student;
var pr;
var lpr;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}
pr = prompt("Student name: ");
lpr = pr.toLowerCase();
if (lpr == 'dave') {
    student = students[0];
    message += '<h2>Student: ' + student.name + '</h2>';
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Points: ' + student.points + '</p>';
    message += '<p>Achievements: ' + student.achievements + '</p>';
    print(message);
}

else if (lpr == 'jody') {
    student = students[1];
    message += '<h2>Student: ' + student.name + '</h2>';
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Points: ' + student.points + '</p>';
    message += '<p>Achievements: ' + student.achievements + '</p>';
    print(message);
}

else if (lpr == 'jordan') {
    student = students[2];
    message += '<h2>Student: ' + student.name + '</h2>';
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Points: ' + student.points + '</p>';
    message += '<p>Achievements: ' + student.achievements + '</p>';
    print(message);
}

else if (lpr == 'john') {
    student = students[3];
    message += '<h2>Student: ' + student.name + '</h2>';
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Points: ' + student.points + '</p>';
    message += '<p>Achievements: ' + student.achievements + '</p>';
    print(message);
}

else if (lpr == 'trish') {
    student = students[4];
    message += '<h2>Student: ' + student.name + '</h2>';
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Points: ' + student.points + '</p>';
    message += '<p>Achievements: ' + student.achievements + '</p>';
    print(message);
}

else {
    document.write("Sorry, " + pr + " is not in our database.")
}
