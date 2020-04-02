const students = [
    {name : "Manna", id : 001},
    {name : "James Bond", id : 007},
    {name : "Jonny English", id : 456},
]

// const output = [];
// for(let i=0; i<=students.length; i++){
//     const element = students[i].name;
//     output.push(element);
// }

const names = students.map (st => st.id); //to get the names from he array.
console.log(names);