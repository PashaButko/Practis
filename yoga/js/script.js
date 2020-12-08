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
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; // отменить запрет прокрутки страницы
    });

    let descrBtn = document.querySelector('.description-btn');
    descrBtn.addEventListener('click', function(){
        overlay.style.display = 'block';
    });

    
    // Form 4.3

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type','application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key){
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
            } else if (request.readyState = 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0;i < input.length; i++){
            input[i].value = '';
        }

    });
    
    //form footer
    //очень важно что-бы получить key нужно в html указать в input - name!
    let formFooter = document.querySelector('#form');
    let inputFooter = formFooter.getElementsByTagName('input');

    formFooter.addEventListener('submit', function(e){
        e.preventDefault();
        formFooter.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type','application/json; charset=utf-8');

        let formData = new FormData(formFooter);
        console.log(formData);

        let obj = {};
        formData.forEach(function(value, key){
            obj[key] = value;
        });
        console.log(formData);

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
            } else if (request.readyState = 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0;i < inputFooter.length; i++){
            inputFooter[i].value = '';
        }

    });
});

