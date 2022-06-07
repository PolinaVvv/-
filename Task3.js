let user = {
    name: "John",
};
alert(user.name);

user.surname = "Smith";
alert(user.surname);

user.name = "Pete";
alert(user.name);

delete user.name;
alert(user.name);


function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}

let schedule = {};
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
alert(schedule["8:30"]);


function count(obj){
    let sum = 0;
    for (let key in obj){
        sum += obj[key];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

alert(count(salaries));


function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] == "number"){
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
multiplyNumeric(menu);

for (let key in menu){
    alert(menu[key]);
}