

function getTimeFromMinutes(minutesTotal) {
    if(!Number.isInteger(minutesTotal)||minutesTotal<0 || typeof(minutesTotal) !== 'number'){
        return "Ошибка, проверьте данные";
    }
    let hous = Math.floor( minutesTotal /60);
    let minutes = minutesTotal % 60;
    let housStr  ='';
    switch (hous) {
        case 0: 
        housStr ='часов';
        break;
        case 1:
        housStr ='час';
        break;
        case 2:
            case 3:
                case 4: housStr='часa';
                break;
        default: housStr='часов';

    }
    return`Это ${hous} ${housStr} и ${minutes} минут"`;
    
}
console.log(getTimeFromMinutes(150));//"Это 2 часа и 30 минут"
console.log(getTimeFromMinutes(50));// "Это 0 часов и 50 минут"
console.log(getTimeFromMinutes(0));// "Это 0 часов и 0 минут"
console.log(getTimeFromMinutes(-150));//=> "Ошибка, проверьте данные"
console.log();
console.log();
// которая принимает в себя 4 числа и возвращает самое большее из них.
//Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.