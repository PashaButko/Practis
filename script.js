let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let firstQuestions = prompt("Введите обязательную статью расходов в этом месяце");
let twoQuestions = prompt("Во сколько обойдется");

let appData = {
    budget : money,
    timeData : time,
    expenses : {
        [firstQuestions] : twoQuestions
    },
    optionalExpenses : undefined,
    income : [],
    savings : false
};

alert(`Ваш бюджет на 1 день состовляет : ${appData.budget / 30}`);