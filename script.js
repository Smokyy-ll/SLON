// let a =confirm('Вам есть 18?');
// if (a==true) {
//     prompt('Укажите своё имя ниже:');
//     window.location.href = 'alleleph.html'
// }
// else {
//     alert('Извините,вы слишком маленький(ая)')
// }
// let numberOne=55;
// let numberTwo=356;
// let sum=numberOne*numberTwo;
// console.log(sum);

// let form=document.querySelector('.forum');
// function changeColor() {
//     form.style.background = '#FF8C00';
// }

// let body=document.querySelector('body');
// function changeBody() {
//     body.style.background = '#FFA07A';
// }

// var b = 'Привет мир';
// function fun() {
//     let c = 'Добро пожаловать';
//     alert(b);
//     alert(c);
// }

// var txt1 = 'Сбербанк онлайн приветствует вас';
// var txt2 = 'Введите номер вашей карты';
// var txt3 = 'Вы готовы перечислить 500$?'
// function sber() {
//     alert(txt1);
//     confirm(txt3);
//     if (confirm(txt3)==true) {
//         prompt(txt2);
//         alert('Спасибо');
//     }
//     else {
//         alert('МЫ ВАС ЗАПОМНИЛИ');
//     }
// }


// function audio() {
//     let aud= document.querySelector('#aud');
//     aud.style.display='block';
// }


// var script = document.createElement('script');
// script.src = 'script.js'
// document.head.append(script);

// script.onload = function a() {
//     alert('Загружено')
// }
// script.onerror = function b() {
//     alert('Сбой')
// }


var audi = document.createElement('audio');
audi.src = 'music/barbariki.mp3';
audi.controls = 'controls';
document.body.append(audi);


// var pic = document.createElement('img');
// pic.src = "immg/el.jpeg";
// pic.width="400";
// pic.height="200";
// pic.alt="Это слон";
// document.body.append(pic);
// pic.onload = function a() {
//     alert('Загружено')
// }
// pic.onerror = function b() {
//     alert('Сбой')
// }

// var vid = document.createElement("iframe");
// vid.src = "https://www.youtube.com/embed/h7gYdpX7ldg";
// document.body.append(vid);
// vid.onload = function t() {
//     alert('Загружено');
// }
// vid.onerror = function f() {
//     alert('Сбой');
// }


function getFuelExpence() {
    let fuelPer100km = 10;

    let distance = 284;

    let expense = distance / fuelPer100km;

    let abb = 'Расход топлива на ' + distance + 'км. соcтавит ' + expense + 'л.';

    return abb;
}

getFuelExpence();