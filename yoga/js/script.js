window.addEventListener('DOMContentLoaded', function(){
    'use scrict'

    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent')

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
        }
    }

    info.addEventListener('click', function(e){
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    //timer 

    let deadLine = '2020-12-01';

    function getTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) % 60);
        let minutes = Math.floor((t/1000/60) % 60);
        let hours = Math.floor((t/(1000*60*60)));
        // let hours = Math.floor((t/1000/60/60) % 24); 
        // let days = Math.floor((t/(1000*60*60*24)));
        // таймер дней
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            function addZero(num){
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }

            if (t.total <= 0){
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            } 
        }
    }
    setClock('timer', deadLine);

    // modal

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; // запрет прокрутки страницы
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');window.addEventListener('DOMContentLoaded', function() {

            'use strict';
            let tab = document.querySelectorAll('.info-header-tab'),
                info = document.querySelector('.info-header'),
                tabContent = document.querySelectorAll('.info-tabcontent');
        
            function hideTabContent(a) {
                for (let i = a; i < tabContent.length; i++) {
                    tabContent[i].classList.remove('show');
                    tabContent[i].classList.add('hide');
                }
            }
        
            hideTabContent(1);
        
            function showTabContent(b) {
                if (tabContent[b].classList.contains('hide')) {
                    tabContent[b].classList.remove('hide');
                    tabContent[b].classList.add('show');
                }
            }
        
            info.addEventListener('click', function(event) {
                let target = event.target;
                if (target && target.classList.contains('info-header-tab')) {
                    for(let i = 0; i < tab.length; i++) {
                        if (target == tab[i]) {
                            hideTabContent(0);
                            showTabContent(i);
                            break;
                        }
                    }
                }
        
            });
        
            // Timer 
        
            let deadline = '2018-11-21';
        
            function getTimeRemaining(endtime) {
                let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)));
        
                return {
                    'total' : t,
                    'hours' : hours,
                    'minutes' : minutes,
                    'seconds' : seconds
                };
            }
        
            function setClock(id, endtime) {
                let timer = document.getElementById(id),
                    hours = timer.querySelector('.hours'),
                    minutes = timer.querySelector('.minutes'),
                    seconds = timer.querySelector('.seconds'),
                    timeInterval = setInterval(updateClock, 1000);
                    
                function updateClock() {
                    let t = getTimeRemaining(endtime);
        
                    function addZero(num){
                                if(num <= 9) {
                                    return '0' + num;
                                } else return num;
                            };
        
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
        
                    if (t.total <= 0) {
                        clearInterval(timeInterval);
                        hours.textContent = '00';
                        minutes.textContent = '00';
                        seconds.textContent = '00';
                    }
                }
        
            }
        
            setClock('timer', deadline);
        
            // Modal
        
            let more = document.querySelector('.more'),
                overlay = document.querySelector('.overlay'),
                close = document.querySelector('.popup-close');
        
            more.addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });
        
            close.addEventListener('click', function() {
                overlay.style.display = 'none';
                more.classList.remove('more-splash');
                document.body.style.overflow = '';
            });
        
        });
        
        // Второе задание
        
        // let age = document.getElementById('age');
         
        // function showUser(surname, name) {
        //          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
        // }
         
        // showUser.apply(age, ["Горький","Максим"]);
        document.body.style.overflow = ''; // отменить запрет прокрутки страницы
    });

    let descrBtn = document.querySelector('.description-btn');

    descrBtn.addEventListener('click', function(){
        overlay.style.display = 'block';
    });

    class Options{
        constructor(height, width, bg, fontSize, textAlign){
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }

        createDiv(){
            let div = document.createElement('div');
            document.body.appendChild(div);
            let param = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
            div.style.cssText = param;
        }
    }

    const item = new Options(300, 350, "grey", 14, "center");
    item.createDiv();
});

// let age = document.getElementById('age');
// function showUser(surname, name){
//     console.log("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }

// showUser.call(age, 'Павел', 'Бутко');
// showUser.apply(age, ['Павел', 'Бутко']);
// let show = showUser.bind(age);
// show('Павел', 'Бутко');