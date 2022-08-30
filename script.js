'use strict';

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







// ****************** window **************

// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// Так получаем элемент только с паддингами и без маржинов и за вычетом полосы прокрутки
// const height = box.clientHeight;
// const width = box.clientWidth;

// Так получаем элемент еще и с учетом маржинов и полосы прокрутки
// const height = box.offsetHeight;
// const width = box.offsetWidth;

// Так получаем полную высоту элемента с учетом скролла
// const height = box.scrollHeight;
// const width = box.scrollWidth;

// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';     // То есть при клике на кнопку, у нас раскроется окно
//     console.log(box.scrollTop);     //А так при клике на кнопку мы узнаем сколько пользователь проскроллил от начала окна
// });

// console.log(box.getBoundingClientRect());   // Так получае координаты элемента
// console.log(box.getBoundingClientRect().top);   // Так отдельные значения объекта


// const style = window.getComputedStyle('.box');      //Так получаем стили css только для проверки на соответсвтие

// console.log(style.display);     //Так получаем стили из css которые уже для элемента применились

// document.documentElement.scrollTop;       //Так можем следить за тем что происходит со страницей, а не с конкретным элементом

// window.scrollBy();  //Скролл от текущей позиции

// window.scrollBy();  //Скролл от начала страницы




// *************** Функции конструкторы *****************


// function user (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const ivan = new user('Ivan', 18);
// const mary = new user('Mary', 33);

// console.log(ivan);
// ivan.hello();




// *************** Контекст вызова, this *****************


// function showThis() {
//     console.log(this);
// }

// showThis();         //Будет равно undifined, но если use strict отключен, то = window


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();         //Котекст у методов объекта, сам объект


// function user (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const ivan = new user('Ivan', 18);
// const mary = new user('Mary', 33);

// console.log(ivan);
// ivan.hello();
// // This в конструкторах и классах это новый экземпляр объекта


// Передача контекста вызова

// function sayName(surname) {
// console.log(this);
// console.log(this.name + surname);
// }

// const user = {
//     name: 'Sonya'
// };

// sayName.call(user, ' Lesheva');     //Вторым элементом передаем аргумент 
// sayName.apply(user, [' Lesheva']);  //Разница только в написании


// function count (num) {
//     return this * num
// }

// const double = count.bind(3);    //Здесь присваиваем значения для this создавая новвую функцию

// console.log(double(3));     //Здесь уже передаем значения для аргумента функции (num)


// const box = document.querySelector('.box');

// box.addEventListener('click', function() {
//     console.log(this);      //При использовании обычной анонимной функции контекстом вызова будет сам элемент и это по сути идентично использованию event.target
                              //Если используем струлочную функции то аргумент вызова потеряется
// });


// const obj = {
//     a: 5,
//     sayNumber: function() {
//         const say = () => {         //Такая стрелочная функция уже будет брать контекст вызова у своего родителя
//             console.log(this);  
//         };
//         say();
//     }
// };

// obj.sayNumber();

// // Стандартное написание
// const double = (a) => {
//     return a * 2;
// };

// Сокращенное написание если только одна строчка
// const double = a => a * 2;

// console.log(double(4)); 




// // **************** Классы ES6 ***************

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {      //Extends наследуем хначения другого класса
//     constructor(height, width, text, bgColor) {
//         super(height, width);    //Так получаем свойства класса у которого наследовали
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(20, 12, 'Hello', 'blue');

// div.showMyProps();      //Используем изначальные свойства нашего объекта
// console.log(div.calcArea());    //Используем унаследованный метод с новыми значениями

// const square = new Rectangle(10,10);        //Так создаем новый объект по шаблону класса
// const long = new Rectangle(10,20); 

// console.log(square.calcArea());
// console.log(long.calcArea());






// ************************* REST Elements *********************

const log = function(a, b, ...rest) {       //...это rest оператор который говорит о том что здесь может быть значение, но может и не быть
    console.log(a, b, rest);
};

log('Джонни', 55, 67, 'Эвин');      //rest элементы помещаются в массив


// Перевод в бинарное

// function addBinary(a,b) {
//  return Number(a + b).toString(2);
// }


//Переворот строки

// const reverseWords = (str) => str.split('').reverse().join('');