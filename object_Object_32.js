"use strict";

const obj ={
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

console.log(obj["colors"]["border"]);
//console.log(obj.name);
//delete obj.name;
//console.log(obj);

for(let key in obj){
    if(typeof(obj[key]) === 'object') {
        for (let i in obj[key]) {
            console.log(`Свойство ${i} має значення ${obj[key][i]}`);
            
        }
    } else {
    console.log(`Свойство ${key} має значення ${obj[key]}`);
    //counter++;
    }
}
//Порахувати скільки ключей в обекті (в Object не має свойства lenght)**
//додати counter++ до if
let counter =0;
for(let key in obj){
    counter++;

}
console.log(counter);
//або через метод об'єкта 
console.log(Object.keys(obj));//[ 'name', 'width', 'height', 'colors' ]
console.log(Object.keys(obj).length);//4

obj.makeTest();//метод об'єкта Test

//Деструкторизація
const {border, bg} = obj.colors;
console.log(border);//black
