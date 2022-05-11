/*
const z = "a";
// z = "b" является ошибкой, константа не изменяется

let y = 123; // let можно впоследствии заменять
console.log(y)

y = 321;
console.log(y)

// типы данных

const a = "Tilek"; // string
const b = 1992; // number
const c = true; // boolean
const d = false; // boolean

console.log(typeof b); // посмотреть, к какому типу данных относится данная переменная

const obj = { // объект, в котором хранятся ключи и их значения
    key: "value",
    firstName: "Tilek",
    lastName: "Toktokozhoev",
    bDate: "19.01.1992"
}

console.log(obj); // показывает все ключи с их значениями
console.log(obj.firstName); // показывает только значение указанного ключа

const arr = [ "Tilek", "Toktokozhoev", 30 ] // массив, тип данных, в котором можно хранить любые типы данных (текст, цифры, объекты, boolean)
console.log(arr[1], arr[0], arr[2]);

const arr2 = [
    {
        key: "value 1"
    },
    {
        key: "value 2"
    },
    {
        key: "value 3"
    },
]
console.log(arr2[1].key); // в массиве каждый объект указывается через нумерацию (начинается с нуля)

const firstNumb = prompt("Введите первое число:");
const secondNumb = prompt("Введите второе число:");
if( firstNumb > secondNumb ) {
    console.log( firstNumb + " больше чем " + secondNumb);
}
else if ( firstNumb < secondNumb) {
    console.log( firstNumb + " меньше чем " + secondNumb)
}
else {
    console.log(firstNumb + " и " + secondNumb + " равны")
};

const imya = prompt("Введите ваше имя");
const vozrast = prompt("Введите ваш возраст");
if ( vozrast > 18) {
    alert( imya + ", добро пожаловать!")
}
else {
    alert( imya + ", Вам запрещено!")
}
*/

// 1 задание
const imya = prompt("Введите ваше имя:");
const privetstvie = alert("Приветсвую, " + imya + "!");
console.log("Приветствую, " + imya + "!");

// 2 задание
const arr1 = ["Tilek", "Toktokozhoev", "Duishenbekovich", 19, 01, 1992];
const arr2 = ["Name", "Surname", "Last Name", "Birth date"];
let arr1l = arr1.length;
let arr2l = arr2.length;
if (arr1l < arr2l) {
  console.log("Первый массив меньше, чем второй");
}
else if (arr1l > arr2l) {
  console.log("Первый массив больше, чем второй");
}
else {
  console.log("Оба массива равны");
}
