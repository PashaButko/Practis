let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдется");
    
        if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 20 && b.length < 20) {
            console.log('Done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();




function checkSavings() {
    if (appData.savings) {
        let save = +prompt('Какова сумма накопления?');
        let perc = +prompt('Под какой процент?');

        appData.monthIncome = (save/100/12 * perc).toFixed(1);
        alert('Доход в месяц с вашего депозита : ' + appData.monthIncome + "рублей");
    }
}

checkSavings();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert('Ежедневный бюджет :' + appData.moneyPerDay + "рублей");
}

detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

function chooseOptExpenses () {
    for (let i = 0;i < 3;i++ ){
        let optExp = prompt("Статья необязательных расходов");
        appData.optionalExpenses[i] = optExp;
    }
}

chooseOptExpenses();
