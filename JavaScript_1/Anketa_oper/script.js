let surName = prompt("Введите вашу Фамилию", ' ');

let name = prompt("Введите ваше Имя", ' ');

let secondName = prompt("Введите ваше Отчество", ' ');

let age = +prompt("Сколько вам лет?", ' ');

let ageDays = age * 365;

let ageFiveYears = age + 5;

let retire;
let currentGender;
let gender = confirm("Вы мужчина?");

        (age > 120) ? ageDays = ageFiveYears = "Похоже вы уже умерли!" :

        (age <= 0) ? ageDays = ageFiveYears = "Вы еще не родились !" :

        gender === true ? currentGender = "мужской" : currentGender = "женский"

        gender === true || age >= 65 ? retire = "да" : retire = "нет"

        gender === false && age >= 58 ? retire = "да" : retire = "нет"

        isNaN(age) === true ? ageFiveYears = ageDays = age = retire = "введите корректные данные" :

        alert(
        "ваше ФИО: " + ' ' + surName + ' ' + name + ' ' + secondName +
        '\nваш возраст в годах: ' + ' ' + age +
        '\nваш возраст в днях: ' + ' ' + ageDays +
        '\nчерез 5 лет вам будет: ' + ' ' + ageFiveYears +
        '\nваш пол: ' + ' ' + currentGender +
        '\nвы на пенсии: ' + ' ' + retire);