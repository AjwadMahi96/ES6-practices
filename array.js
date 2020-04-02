const ages1 = [13, 15, 78, 45];

const ages2 = [69, 54, 47,63];

//const allAges = ages1.concat(ages2);
const allAges2 = [...ages1, 5, 7, ...ages2];
console.log(allAges2);