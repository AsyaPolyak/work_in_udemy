function returnNeighboringNumbers(n) {
    return [n-1, n , n +1];
}
console.log( returnNeighboringNumbers(4));
   function getMathResult(a, b) {
if (typeof(b) !== 'number' || b <= 0) {
    return a;
}
let str='';
    for (let i=1;i<= b; i++) {

        if(i ===b){
         str+=`${a*i}`;
        }else {
            str+=`${a*i}---`;
        }

    }
    return str;
}
console.log(getMathResult(5, 3));

//обэм і площа поверхності куба
function calculateVolumeAndArea(num) {
    
    if(!Number.isInteger(num) || num < 0 || typeof(num) !== 'number'){
        return `При вычислении произошла ошибка`;
    }
    else {
       let v =0, s=0;
       v = num *num *num;
       s = 6*(num * num) ;
        return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
    }
    }
   console.log( calculateVolumeAndArea(5));
   console.log( calculateVolumeAndArea(15));
   console.log( calculateVolumeAndArea(15.5));
   console.log( calculateVolumeAndArea('15'));// => 'При вычислении произошла ошибка'
   console.log( calculateVolumeAndArea(-15));//  => 'При вычислении произошла ошибка'
//задача про вагони
function getCoupeNumber(num) {
    if(typeof(num) !=='number' || num < 0 || !Number.isInteger(num)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    else if (num ===0 || num>36) {
       return  "Таких мест в вагоне не существует";
    }
    for (let i=4; i<=36; i+=4){
        if (num <=i){
          return Math.ceil(num/4);   
        }
        
    }
}
console.log(getCoupeNumber(33));//  => 9
console.log(getCoupeNumber(7));//  => 2
console.log(getCoupeNumber(300));//  => "Таких мест в вагоне не существует"
console.log(getCoupeNumber(0));//  => "Таких мест в вагоне не существует"
console.log(getCoupeNumber(7.7));//  => "Ошибка. Проверьте правильность введенного номера места"
console.log(getCoupeNumber(-10));//  => "Ошибка. Проверьте правильность введенного номера места"
console.log(getCoupeNumber('Hello'));//  => "Ошибка. Проверьте правильность введенного номера места"