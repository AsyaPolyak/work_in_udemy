//(*) Продвинутые задания на использование циклов и условий
function task1(){
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for(let i =0; i<arr.length;i++){
    result[i]=arr[i];
}
console.log(result);
}
//2 завдання
//typeof()
function task2(){
const data = [5, 10, 'Shopping', 20, 'Homework'];

for(let i = 0; i< data.length; i++){
    //console.log(data[i]);
    if(typeof(data[i]) === 'number'){
        data[i] = data[i] *2;

    } else if (typeof(data[i]) === 'string'){
        data[i] = data[i] +' - done';

    }   
}console.log(data);
}
//3 завдання
function task3(){
const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const result1 = [];
 for(let i = 1; i <= data1.length; i++){
    result1[i-1]=data1[data1.length-i];
 }
console.log(result1);
}task3();

function task_3(){
    let data = [5, 10, 'Shopping', 20, 'Homework'];
    let result = [];
     for(let i = data.length -1; i >= 0; i --){
         result[i]= data[data.length - i];
       // console.log(result);
       
     }
    console.log(result); 
    }task_3();

