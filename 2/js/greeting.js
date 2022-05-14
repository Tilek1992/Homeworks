/*
// 1 цикл for
const array = [
  {
    username: "Jack",
    full_name: "Jack Barbaro"
  },
  {
    username: "Jack",
    full_name: "Jack Barbaro"
  },
  {
    username: "Jack",
    full_name: "Jack Barbaro"
  }
]

for (let i = 0; i < array.length; i++) { //цикл for работает по индексу
  console.log(array[i]); // i = index
}*/

// 2 цикл for of
const array = [
  {
    username: "Jack",
    full_name: "Jack Barbaro"
  },
  {
    username: "Jack",
    full_name: "Jack Barbaro"
  },
  {
    username: "Jack",
    full_name: "Jack Barbaro"
  }
]

for(let user of array){ // в цикле for of создаём переменную (в данном случае user) и ей назначаем все элемены внутри массива
  console.log(user); // выходят все элементы в консоли, нельзя ограничить показ какого-то элемента внутри массива
}

//3 цикл for in
const obj = {
  key1: "b1",
  key2: "b2",
  key3: "b3",
  key4: "b4",
  key5: "b5",
  key6: "b6",
  key7: "b7",
  key8: "b8",
  key9: "b9",
  key10: "b10"
}

for(key in obj){ // цикл for in делает то же самое, что и for of, только для объектов
  console.log(obj); // если в цикле for of вызывали переменную, то здесь вызываем сам объект
  console.log(obj[key]); // указвая объект и его ключ, мы вызываем только значения (все значения всех ключей внутри данного объекта)
}

//3 цикл while
 let i = 0;

 while(i > 5){
   console.log("Hello!");
 }

 //4 фильтрация
 const users = [
   {
     username: "Aman",
     salary: 500
   },
   {
     username: "Maksat",
     salary: 10000
   },
   {
     username: "Tilek",
     salary: 5000
   }
 ]

 // for (var user of users) {
 //   if (user.salary > 500) {
 //     console.log(user);
 //   }
 // }
 const filteredUsers = users.filter(user => user.salary > 500)
 console.log(filteredUsers); // фильтрация без if

// ДЗ - 2
const supers = [
  {
    username: "First",
    power: 3000,
    speed: 6000
  },
  {
    username: "Second",
    power: 100,
    speed: 10000
  },
  {
    username: "Third",
    power: 5000,
    speed: 5000
  }
]
const filteredSupers = supers.filter(sup => sup.power > 100)
console.log(filteredSupers);
