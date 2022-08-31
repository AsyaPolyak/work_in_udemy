const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 150,
            length: 7
        },
        {
            width: 200,
            length: 5
        },
        {
            width: 8,
            length: 100
        }
    ],
    height: 1,
    moneyPer1m3: 3,
    budget: 0
}

function isBudgetEnough(data) {
    let square =0;
    let volume = 0;
    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    }
        );
    volume = data.height *square;
        if(data.budget-(volume * data.moneyPer1m3)>=0){
            return `Бюджета достаточно`;

        } else{
            return `Бюджета недостаточно`;

        }
}

console.log(isBudgetEnough(shoppingMallData));