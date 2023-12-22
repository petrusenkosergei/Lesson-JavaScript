//задание 1
let a = prompt("Как вас зовут?");
alert("добро пожаловать на сайт " + a);

//задание 3
let c = 17;
let b = prompt("ваш возраст 19?");
if (b>c) {
    alert("прошу заходите");
} else  {
    alert("вам нельзя зайти на данный сайт извините")
}

//задание 4
let d = "ножницы"
let g = prompt("Два");
if (d === g){
    alert("n")
} else{
    alert("ь")
}

//задание 2
let l = confirm("ты отправил письмо?");
if (l){
    alert("true");
}else{
    alert("отправь письмо!")
}

//задание 5
let v = 1
let f = prompt("угадай число от 1 до 10?")
if (v===f){
    alert("угадал")
}else{
    alert("не угадал")
}
