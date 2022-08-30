//Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и
// возвращает эту строку в обратном порядке.

const someString = 'This is some strange string';
function reverse(str){
    if(typeof(str) !== 'string'){
        return `Ошибка!`;
    } 
    return str.split('').reverse().join('');
}
console.log(reverse(someString));//'gnirts egnarts emos si sihT'