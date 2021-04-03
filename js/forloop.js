var person = {
    name:'Sarah',
    country:'USA',
    age: 35,
    treehouseStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

for (test in person) {
    console.log(test, ': ', person[test]);
}