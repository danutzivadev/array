var pr = '';
var stundets = [
    { name: 'Danut', track: 'Web Development' , Achievments: '5', Points: '10' },
    { name: 'David', track: 'Ios' , Achievments: '2', Points: '7' },
    { name: 'Darius', track: 'React' , Achievments: '10', Points: '10' },
    { name: 'Dan', track: 'Backend developer' , Achievments: '6', Points: '9' },
    { name: 'Bogdan', track: 'Java' , Achievments: '3', Points: '3' }

];


document.getElementById("demo").innerHTML =
  '<h2>'+ "Student: " + stundets[0].name + '</h2>' + "<br>" +
    "Track: " + stundets[0].track + "<br>" +
    "Achievements: "  +  stundets[0].Achievments + "<br>" +
    "Points: " + stundets[0].Points + "<br>" + "<br>"

+
    '<h2>'+ "Student: " + stundets[1].name + '</h2>' + "<br>" +
    "Track: " + stundets[1].track + "<br>" +
    "Achievements: "  +  stundets[1].Achievments + "<br>" +
    "Points: " + stundets[1].Points + "<br>" + "<br>"

+
    '<h2>'+ "Student: " + stundets[2].name + '</h2>' + "<br>" +
    "Track: " + stundets[2].track + "<br>" +
    "Achievements: "  +  stundets[2].Achievments + "<br>" +
    "Points: " + stundets[2].Points + "<br>" + "<br>"

+
    '<h2>'+ "Student: " + stundets[3].name + '</h2>' + "<br>" +
    "Track: " + stundets[3].track + "<br>" +
    "Achievements: "  +  stundets[3].Achievments + "<br>" +
    "Points: " + stundets[3].Points + "<br>" + "<br>"

+
    '<h2>'+ "Student: " + stundets[4].name + '</h2>' + "<br>" +
    "Track: " + stundets[4].track + "<br>" +
    "Achievements: "  +  stundets[4].Achievments + "<br>" +
    "Points: " + stundets[4].Points + "<br>" + "<br>";
