let surName = prompt("Введите вашу Фамилию", ' ');

let name = prompt("Введите ваше Имя", ' ');

let secondName = prompt("Введите ваше Отчество", ' ');

let age = +prompt("Сколько вам лет?", ' ');

let ageDays = age * 365;

let ageFiveYears = age + 5;

let retire;
let currentGender;

if (age > 120){
    ageDays ="Похоже вы уже умерли!";
    ageFiveYears ="Похоже вы уже умерли!";
}else if (age<=0){
    ageDays ="Вы еще не родились !";
    ageFiveYears ="Вы еще не родились !";

}
let gender = confirm("Вы мужчина?")

if (gender === true) {
    currentGender = "мужской";

} else {
    currentGender = "женский";

}


if (gender === true || age >= 65 ) {
    retire = "да";

} else if (gender === false && age >= 58) {
    retire = "да";

} else {
        retire = "нет";
    }if (isNaN(age) === true) {
    age = "введите корректные данные";
    ageDays ="введите корректные данные";
    ageFiveYears ="введите корректные данные"
    retire = "введите корректные данные";
}


    alert("ваше ФИО: " + ' ' + surName + ' ' + name + ' ' + secondName +
        '\nваш возраст в годах: ' + ' ' + age +
        '\nваш возраст в днях: ' + ' ' + ageDays +
        '\nчерез 5 лет вам будет: ' + ' ' + ageFiveYears +
        '\nваш пол: ' + ' ' + currentGender +
        '\nвы на пенсии: ' + ' ' + retire);
