const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
for (let key in citiesAndCountries) {
    console.log(`${key} - это ${citiesAndCountries[key]}`);
}
// let city = Object.entries(citiesAndCountries).map(([key, value]) => [key + ' - это ' + value])
// console.log(city)


function getArray(){
    const amount = 12;
    let count = 3;
    let arr =[];
    let slimArr =[];
    for (let i = 1; i <= amount; i++) {
        arr.push(i);           
    }
    for (let j = 0; j<amount; j+=count) {
        slimArr.push(arr.slice(j,j+count));
    }
    console.log(slimArr);
}
getArray() 




const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' , 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday ', 'Sunday'],
}
function getNameOfDay(){
    const lang = 'en';
    const day = 7;
    const getDate = (lang, day)=> {
        return namesOfDays[lang][day-1]
    }
    console.log(getDate(lang, day));
}
getNameOfDay()




let mass = [12, 898,5, 899, 900];
        console.log(sum(mass));
        function sum(array) {
            return array.sort((a,b) => a-b).slice(0,2).reduce((a,b)=> a+b)
        }


let mass = [1, 0, 1, 0, 1];
array = mass.join('')
let mass2 = parseInt(array, 2)
console.log(mass2)

        
