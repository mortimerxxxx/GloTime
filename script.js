'use strict';

let hello = document.querySelector('.hello'),
    day = document.querySelector('.day'),
    time = document.querySelector('.time'),
    newYear = document.querySelector('.newYear'),
    date = new Date(),
    hour = date.getHours(),
    minutes = date.getMinutes();
    



    if (hour >= 5 && hour < 12){
        hello.textContent = "Доброе утро";
    } else if (hour >= 12 && hour < 18){
        hello.textContent = "Добрый день";
    } else if (hour >= 18 && hour < 24){
        hello.textContent  = "Добрый вечер";
    } else if (hour >= 0 && hour < 5){
        hello.textContent  = "Доброй ночи"; 
    }

    function days(){
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        return days[date.getDay()];
    }
    day.textContent = `Сегодня: ${days(date)}`;

    function getCurrentTimeString() {
        return new Date().toTimeString().replace(/ .*/, '');
    }
    setInterval(
        () => {time.textContent = `Текущее время: ${getCurrentTimeString()}`;},
        1000
    );
    
    function getTimeRemaining() {  
        let stopDate = new Date("31 December 2021"),
            dateNow = new Date().getTime(),
            timeRemaining = (stopDate - dateNow) / 1000,
            days = Math.floor(timeRemaining / 60 / 60 / 24) % 365;
            return {
                timeRemaining,
                days
            };
    }
    let timer = getTimeRemaining();

    if(timer.timeRemaining > 0){
        newYear.textContent = `До нового года осталлось: ${timer.days} дней`;
    }