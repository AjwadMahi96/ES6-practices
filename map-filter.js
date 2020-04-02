const array = [3,5,2,4,6];
// const output = [];
// for(let i=0; i<array.length; i++){
//     const element = array[i];
//     const result = element * element;
//     output.push(result);
// }

const result = array.map(x => x*2);

const bigger = array.filter(x => x<=5);

const filter = array.find(x => x>3); //filter returns only the 1st value.

const bigger2 = array.filter(x => x>=10); //when filter doesn't find any value it returns an empty array.
console.log(bigger2);