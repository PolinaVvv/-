// "выплывашка" по id одно элемента
// let element = document.getElementById("para1");
// element.onclick = change;

// function change(){
//     console.log("hi");
//     element.style.transition = "all 2s";
//     element.style.opacity = 1;
//     setTimeout("element.style.opacity = 0", 1500);
// }

// "выплывашка" с помощью класса, но без полупрозрачной наводки
// const element = document.getElementsByClassName("position-and-size")
// const arrayID = [...element]
// for (let el of arrayID) {
//     el.onclick = change
//     console.log(el)

//     function change(){
//         console.log("hi");
//         el.style.transition = "all 2s"
//         el.style.opacity = 1
//         setTimeout(reverseChange, 1000)
//     }
//     function reverseChange(){
//         el.style.opacity = 0
//     }
// }

// "выплывашка" с помощью класса с полупрозрачной наводкой
// const element = document.getElementsByClassName('position-and-size')
// const arrayID = [...element]
// for (let el of arrayID) {
// el.onmouseover = translucency
// el.onmouseout = reverseChange
// el.onclick = change

// function translucency() {
//   el.style.opacity = 0.2
// }
// function change() {
//   console.log('hi')
//   el.style.transition = 'all 2s'
//   el.style.opacity = 1
//   setTimeout(reverseChange, 1000)
// }
// function reverseChange() {
//   el.style.opacity = 0
// }
// }

const el1 = document.getElementsByClassName('size1')
const arrayAnimalsID = [...el1]

const el2 = document.getElementsByClassName('position-and-size')
const arrayHeardID = [...el2]

for (let el of arrayAnimalsID) {
  el.onclick = change

  function translucency() {
    arrayHeardID[index].style.opacity = 0.2
  }
  function change() {
    index = arrayAnimalsID.indexOf(el)
    arrayHeardID[index].onmouseover = translucency
    arrayHeardID[index].onmouseout = reverseChange
    console.log(arrayHeardID[index])
    arrayHeardID[index].style.transition = 'all 2s'
    arrayHeardID[index].style.opacity = 1
    setTimeout(reverseChange, 1000)
  }
  function reverseChange() {
    arrayHeardID[index].style.opacity = 0
  }
}

for (let el of arrayHeardID) {
  el.onmouseover = translucency
  el.onmouseout = reverseChange
  el.onclick = change

  function translucency() {
    el.style.opacity = 0.2
  }
  function change() {
    console.log('hi')
    el.style.transition = 'all 2s'
    el.style.opacity = 1
    setTimeout(reverseChange, 1000)
  }
  function reverseChange() {
    el.style.opacity = 0
  }
}
