
 var countriesInfo = {}

 var coutryList = []

function getCountryInfo(name,capital) {


  for (i=0; i<2; i++){
      countriesInfo[name] = capital;
      coutryList.push(name);
     
  }


 }



 function deleteCountry() {
     delete countryesInfo['countryName'];

console.log(countryesInfo);
 }




 /*if (name in countries){
     if (countries[name] == false){
         console.log('Нет информации о стране');
     }
     else{
         console.log('Столица: ' + countries[name]);
     }
 }
 else{
     alert('Загляните в список стран и введите необходимую из перечня');
 }*/



/* function getCountryInfo() {

          var countryName = prompt("Введите страну",'');
         if(countryName in countryesInfo){
             console.log("countryName");
            /!* if (countryesInfo[countryName]===false) {
                 return alert ('нет информации о стране ' + countryName + '!');
             }   else {

                 return alert('страна: ' + countryName + ' столица: ' + countryesInfo.countryCapital);
             }*!/


             }









 }*/

