"use strict";

let arr = [10, 1, 2, 3, 4, 6, 8];

arr.pop();//видаляється останній елемент
console.log(arr);
arr.push(10);//додається едемент
console.log(arr);
arr.shift();//видаляє перший елемент і повертає його
console.log(`Shift: ${arr}`);
arr.unshift('d');//добавляє елемент до початку масиву
console.log(`unshift: ${arr}`);

let str = 'html-css-javascript';
//СТРОКУ В МАСИВ
let ar = str.split('-');
console.log(`Split: ${ar}`);

//МАСИВ В СТРОКУ
console.log(`join: ${ar.join('-')}`);

console.log(delete ar[2]);//видаляє другий елемент
console.log(`Sort: ${arr.sort()}`);// сортує як 1,10,2,3,4,6,d

function compareNum(a, b){
    return a-b;
}
console.log(`Sort- callback: ${arr.sort(compareNum)}`);// правильна сортировка за допомогую ф-ї  compareNum

for(let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}
//або
for(let value of arr){
    console.log(value);    
}


const array =[1, 2, 3, 4, 6, 8];
//forEach
array.forEach(function(item, i, arr){
    console.log(`${i}: ${item} всередині масиву ${arr}`);
});
//console.log(array);
//map поверне новий модифікований масив
array.map(function(){
   
});
//con
