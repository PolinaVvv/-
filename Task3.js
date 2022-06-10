// let user = {
//     name: "John",
// };
// alert(user.name);

// user.surname = "Smith";
// alert(user.surname);

// user.name = "Pete";
// alert(user.name);

// delete user.name;
// alert(user.name);

// function isEmpty(obj){
//     for (let key in obj){
//         return false;
//     }
//     return true;
// }

// let schedule = {};
// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
// alert(schedule["8:30"]);

// function count(obj){
//     let sum = 0;
//     for (let key in obj){
//         sum += obj[key];
//     }
//     return sum;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

// alert(count(salaries));

// идея - просто рекурсивно вызывать ф-цию, передавая новый объект (пыталась, но очень хочу спать, простите)
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2
    } else if (typeof obj[key] == 'object') {
      multiplyNumeric(obj[key])
    }
  }
}

function printMenu(menu) {
  for (let key in menu) {
    if (typeof obj[key] == 'object') {
      printMenu(obj[key])
    }
    alert(menu[key])
  }
}

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
  menu2: {
    width: 400,
    height: 600,
    title: 'My menu',
  },
}

multiplyNumeric(menu)
printMenu(menu)
