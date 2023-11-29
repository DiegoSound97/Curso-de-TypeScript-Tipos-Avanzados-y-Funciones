const prices: (number|string)[]=[1,3,2,2,2,'asd']
prices.push(1)
prices.push('1')

let user:[string,number,boolean];
//user=['nicobytes',15]
//user=['DiegoDev',26]

/* user[]                   //INCORRECTO
user['Nico']               //INCORRECTO
user=['nicobytes',15]      //INRRECTO
*/
user=['nicobytes',15,true]  //CORRECTO


//Destructuracion

const [username,age]=user; // Coge el primer y el segundo valor
console.log(username);
console.log(age);



