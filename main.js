
const numbers = [1, 2, 3];

const moreNumbers = [...numbers, 4, 5];

console.log("Opgave 1:", moreNumbers);



const original = ["Anna", "Mads", "Lea"];

const copy = [...original];
copy.push("Jonas");

console.log("Opgave 2 - original:", original);
console.log("Opgave 2 - copy:", copy);





const student = { name: "Anna", age: 25 };

const updatedStudent = {
  ...student,
  age: 26
};

console.log("Opgave 3 - student:", student);
console.log("Opgave 3 - updatedStudent:", updatedStudent);



const a = { x: 1 };
const b = { y: 2 };

const all = {
  ...a,
  ...b
};

console.log("Opgave 4:", all);




const average = (...numbers) => {
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
};

console.log("Opgave 5:", average(2, 4, 6));      
console.log("Opgave 5:", average(1, 2, 3, 4, 5)); 





const addItem = (list, item) => {
  return [...list, item];
};

const list = [1, 2, 3];
const newList = addItem(list, 4);

console.log("Opgave 6 - original:", list);
console.log("Opgave 6 - ny liste:", newList);