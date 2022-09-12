let surName = prompt("Введите вашу Фамилию", ' ');

let name = prompt("Введите ваше Имя", ' ');

let secondName = prompt("Введите ваше Отчество", ' ');

let age = +prompt("Сколько вам лет?", ' ');

let ageDays = age * 365;

let ageFiveYears = age + 5;

let retire;
let currentGender;
let gender = confirm("Вы мужчина?");

gender  ? currentGender = "мужской"
    : currentGender = "женский"

gender || age >= 65 ? retire = "да" :
    retire = "нет"

gender === false && age >= 58 ? retire = "да" :
    retire = "нет"



alert(
    "ваше ФИО: " + ' ' + surName + ' ' + name + ' ' + secondName +
    '\nваш возраст в годах: ' + ' ' + age +
    '\nваш возраст в днях: ' + ' ' + ageDays +
    '\nчерез 5 лет вам будет: ' + ' ' + ageFiveYears +
    '\nваш пол: ' + ' ' + currentGender +
    '\nвы на пенсии: ' + ' ' + retire);