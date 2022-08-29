"use strict";

const obj ={
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
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