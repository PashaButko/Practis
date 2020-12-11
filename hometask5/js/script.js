'use strict';

let menu = document.querySelector('.menu');
let menuItemLi = document.createElement('li');
let itemMenu = document.getElementsByClassName("menu-item");
let title = document.querySelector(".title");
let adv = document.querySelector(".adv");
let promptAnswer = document.querySelector('.prompt');

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пукнт';
menu.appendChild(menuItemLi);


menu.insertBefore(itemMenu[2], itemMenu[1]);


document.body.style.background = "url(img/true.jpg) center no-repeat";


title.textContent = "Мы протолько только подлинную технику";


adv.remove();


let answer = prompt('Ваше отношение к технике Апле?', 'xiaomi forever');
promptAnswer.textContent = answer;