/*let num =50;
for(let i = 1; i<=5; i++){
    console.log(num);
    num++;
}
for(let i = 1; i<10; i++){
    if(i===6){
        //break;
        continue;//пропустить значення
    }
    console.log(i);
}*/
//Цикл в циклі
/*for(let i = 0; i< 3; i++){
    console.log(i);
    for(let j=0; j<3; j++){
        console.log(j);
    }
}*/
//*
//**
//***
//****
//*****
//******
/*let result='';
let lenght =7;

for(let i = 1; i < lenght; i++){
    for(let j=0; j < i; j++){
        result+='*';
    }
    result+='\n';
}console.log(result);*/
//Мітки в циклах
next: for(let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for(let j = 0; j < 3; j++){     
        console.log(`Second level: ${j}`);  
        for(let k=0; k < 3; k++){
            if (k ===2) //continue next;
                        break next;
            console.log(`Third level: ${k}`);

        }
    }
}
//Задания на использование циклов и условий
// Место для первой задачи
//Перша задача
    for(let i = 5; i<=10; i++){
      console.log(i);
    }
//Друга задача
    for(let i = 20; i>=10; i--){
        if(i===13)break;
        console.log(i);
      }
//Третя задача
    for(let i = 2; i<=10; i++){
        if(i%2 === 0){
    console.log(i);}
  }
//Четверта задача
/*for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}*///переробити під while
let i = 2;
while(i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
        
    }i++;
}
//Пята задача заповнити масив числами від 5 до 10
let arrayOfNumbers = [];
for (let i=5; i<=10; i++){
    arrayOfNumbers[i-5]=i;

}
console.log(arrayOfNumbers);

