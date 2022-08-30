//Задачи на работу с массивами
//Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в 
//нужном формате.Если массив пустой, то выводится сообщение 'Семья пуста'
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
//const family = [];
function showFamily(arr) {
    let str='';
    arr.length === 0 ? str = `Семья пуста` : str = `Семья состоит из: `;
    arr.forEach(member => 
        str+= `${member} `
        );
    return str;
}

console.log(showFamily(family));// 'Семья состоит из: Peter Ann Alex Linda'

//напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет
//выводить в консоль эти строки в нижнем регистре.
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr){
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);
