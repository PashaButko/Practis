'use strict'

let btn = document.getElementById("start");
let budgetValue = document.getElementsByClassName('budget-value')[0],
dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
levelValue = document.getElementsByClassName('level-value')[0],
expensesValue = document.getElementsByClassName('expenses-value')[0],
optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue = document.getElementsByClassName('income-value')[0],
monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');
let expensesBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let incomeItem = document.querySelector('#income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('#sum');
let percentValue = document.querySelector('#percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;

btn.addEventListener('click', function(){
    expensesBtn.removeAttribute('disabled');
    optionalExpensesBtn.removeAttribute('disabled');
    countBtn.removeAttribute('disabled');

    time = prompt("Введите дату в формате YYYY-MM-DD", '2020-10-10');
    money = +prompt("Ваш бюджет на месяц?", '30000');
    
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value; //наим
        let b = expensesItem[++i].value; //цена
    
        if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 20 && b.length < 20) {
            appData.expenses[a] = b;
            sum += +b;
            expensesValue.textContent = sum;
        } else {
            i--;
        }
    }
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0;i < optionalExpensesItem.length; i++ ){
        let optExp = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = optExp;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function(){
    if (appData.budget != undefined ) {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);

        let moneyPerDayNew = (appData.budget - +expensesValue.textContent) / 30;
        dayBudgetValue.textContent = moneyPerDayNew.toFixed(1);
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
        levelValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let perc = +percentValue.value;
        appData.monthIncome = (sum/100/12 * perc).toFixed(1);
        appData.yearIncome = (sum/100 * perc).toFixed(1);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let perc = +percentValue.value;
        appData.monthIncome = (sum/100/12 * perc).toFixed(1);
        appData.yearIncome = (sum/100 * perc).toFixed(1);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});


let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
};