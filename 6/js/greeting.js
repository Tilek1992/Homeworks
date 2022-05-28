// 1
const students1 = ['Anarbek'];
const students2 = ['Belek'];
const students3 = ['Daniyar'];
const students4 = ['Gulzhigit'];
const students5 = ['Ernis'];

const all = [...students5, ...students4, ...students3, ...students2, ...students1];
let [first, second, third, fourth, fifth] = all;
console.log(third);

//2
let students = {
  firstName: "Ernis",
  secondName: "Belek",
  thirdName: "Anarbek",
  fourthName: "Daniyar",
  fifthName: "Gulzhigit",
};
Object.assign(students, {sixthName: "Aybek", seventhName: "Nurbek", eighthName: "Jyldyzbek"});
console.log(students);

//3
const click = document.getElementById('button');
const input = document.getElementById('input').value;
console.log(input);

click.onclick = function() {
  alert("Hello, " + input + "!");
};
