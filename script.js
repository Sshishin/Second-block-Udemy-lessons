'use strict'

// Start second block Udemy lessons



// ***********  ClassList и делегирование событий ******************



// const btns = document.querySelectorAll('button');
// console.log(btns[1].classList.length);      //Определяем количество классов в элементе

// console.log(btns[1].classList.item(0));         //Так получаем доступ к конкретному класс по индексу класса

// console.log(btns[1].classList.add('text'));         //Так можем добавить определенный класс

// console.log(btns[1].classList.remove(2));       //А так удалить любой класс тоже по идексу

// ПРИГОДИТЬСЯ ОЧЕНЬ СИЛЬНО ПРИ РАБОТЕ С ЭЛЕМЕНТАМИ СТРАНИЦЫ И С ЛОГИКОЙ ОТОБРАЖЕНИЯ ЭЛЕМЕНТОМ ПО ОБРАБОТЧИКУ СОБЫТИЙ

// console.log(btns[1].classList.toggle('text'));        //Если элменет отображается, то этот метод его удалит и наоборот

// if(btns[1].classList.contains('btn-color')) {       //Если элемент содержит указанный класс, то это true
//     console.log('Есть');
// }  


// ДИНАМИЧЕСКАЯ РАБОТА С КЛАССАМИ И СТРАНИЦЕЙ (ИЗМЕНЕНИЕ ПО КЛИКУ)


// btns[0].addEventListener('click', () => {
// if(!btns[1].classList.contains('btn-color')) {
//     btns[1].classList.add('btn-color');
//     console.log('Класс был добавлен');
// } else {
//     btns[1].classList.remove('btn-color');
//     console.log('Класс был удален');
// }
// });

// АНАЛОГИЧНЫЙ, НО БОЛЕЕ ПРАВИЛЬНЫЙ ВАРИАНТ

// btns[0].addEventListener('click', () => {
//     btns[1].classList.toggle('btn-color');
//     });



// КАК СДЕЛАТЬ ЧТОБЫ ПРИ КЛИКЕ НА ЛЮБУЮ КНОПКУ ПРОИСХОДИЛО ОДНО И ТОЖЕ ДЕЙСТВИЕ


// const wrapper = document.querySelector('.wrapper');

// //Делегирование

// wrapper.addEventListener('click', (event) => {
//     if(event.target && event.target.tagName == 'BUTTON') {          //С помощью event.target пониманием произшло ли это событие внутри нужного элемента или нет
//         // Пишем оператор И потому что такого рекомендации гугла и для некоторых тегов это нужно
//         console.log('Hi');
//     }
//     });

// // ПРИ ДОБАВЛЕНИИ КНОПКИ ЧЕРЕЗ ОБЫЧНЫЙ ПЕРЕВОД FOREACH ОНА УЖЕ НЕ БУДЕТ ИМЕТЬ ПРОПИСАННЫЙ ФУНКЦИОНАЛ, ТАК КАК ОБЪЕЯВЛЕНА ПОЗЖЕ


// // Можно обращаться еще более точечно через метод совпадений 

// wrapper.addEventListener('click', (event) => {
//     if(event.target && event.target.matches('button.btn-color') == 'BUTTON') {          //С помощью event.target пониманием произшло ли это событие внутри нужного элемента или нет
//         // Пишем оператор И потому что такого рекомендации гугла и для некоторых тегов это нужно
//         console.log('Hi');
//     }
//     });





// *****************  setTimeout (асинхронное выполнение) ***************

// const timerId = setTimeout(function(){
// console.log('Hi');
// }, 3000);       //Запуститься через 3 секунды 

// const timerId = setTimeout(function(text){
//     console.log(text);
//     }, 3000, 'Hi');     //Сюда можно передать 3-им аргументом передать значение которое выполниться в функции

// const timerId = setTimeout(logger, 3000);       //Можем вызывать уже созданную функцию

// function logger () {
//     console.log('Hi');
// }

// clearInterval(timerId);     //Так отменяем вызов таймера, если например пользователь уже сделал нужное действие

// const btn = document.querySelector('.btn');

// btn.addEventListener('click',() => {        //После клика на первую кнопку сработает функция через 3 секунды
//     const timerId = setTimeout(logger, 3000);
// });

// let timerId;    //Можем присвоить глобальной области видимости, а в функции уже просто переопределять

// btn.addEventListener('click',() => {        //После клика на первую кнопку сработает функция через 3 секунды
//     timerId = setInterval(logger, 3000);        //При таком методе будет выполняться действие через указанные интервалы
// });

//При работе тяжелой функции если ее выполнение дольше чем указанный setInterval, то setInterval уже не будет ждать указанное время так как считает что время работы обработки функции было и так больше чем интервал и следующая итерация начнет выполняться сразу без отчета интервала
// В таким случаях используют рекурсивный setTimeout

// let id = setTimeout(function log(){      //Так интервалы будут такими как указано при любом сложности функции
//     console.log('Hello');
//     id = setTimeout(log, 500);
// },500);


// ПРОСТАЯ АНИМАЦИЯ ЧЕРЕЗ setInterval


// let box = document.querySelector('.box');       //Получаем элемент при клике на который будет вызываться функция анимации

// function myAnimation() {
//     let elem = document.querySelector('.btn');      //Получаем элемент который будет анимирован
//     let pos = 0;        //Определяем счетчик для измерения позиции перемещаемого элемента

//     const id = setInterval(frame, 10);      //Вызываем функцию через метод интервала где функция будет выполнятся каждую 0.01 секунду

// function frame () {
//     if(pos == 200) {
//         clearInterval();
//     } else {
//         pos++;      //Считаем позицию
//         elem.style.left = pos + 'px';       //Добавляем свойство для элемента
//     }
// }

// }

// box.addEventListener('click', myAnimation);     //Вешаем на кнопку пуска обработчик событий




// ************************* ДАТЫ *******************

// const now = new Date();     //Создали текущую дату

// console.log(now);

// const now = new Date('1967-02-17');     //Можем вносить дату с помощью строки например из инпута

// console.log(now);       //В таком формате будет отображаться с 00 времени

// const now = new Date(1967, 2, 17, 21);     //Так передаем вместе с часами

// console.log(now);    

// const now = new Date(996777777777);     //Так можем конвертировать в миллисекунды от 1970-ого года

// console.log(now);   


// МЕТОДЫ ДАТ


// const now = new Date(); 
// new Date.parse(2020-11-21);   //Тоже самое если и подставить такую дату просто в нью дате  

// Это методы геттеры (получаем)

// console.log(now.getFullYear());  //Так получаем только год
// console.log(now.getMonth()); 
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset());       //Разница между нашим поясом и гринвичем в минутах
// console.log(now.getTime());     //Так получаем кол-во миллисекунд которое сейчас прошло с 1970-ого года

// Это методы сеттеры (задаем)

// console.log(now.setMonth(12));      //Так получаем в миллисекундах
// console.log(now);       //Так получаем в дате

// now.setMonth(12);      //Тоже самое
// console.log(now);       




// ТЕСТИРУЕМ НА СКОРОСТЬ ВЫПОЛНЕНИЯ ЦИКЛА


// let start = new Date();

// for(let i = 0; i < 200000000; i++) {
//     i ** 3;
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);