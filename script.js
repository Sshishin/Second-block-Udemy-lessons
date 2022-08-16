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