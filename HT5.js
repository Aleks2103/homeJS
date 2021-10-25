const students = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
];

// task 1

class Student{
    constructor(enrollee, name, ratingPoint, schoolPoin){
        this.enrollee = enrollee;
        this.name = name;
        this.ratingPoint = ratingPoint;
        this.schoolPoin = schoolPoin;
    }
    setId(){
        return console.log(Math.floor(Math.random()*1000))
    }
    isSelfPayment(array){
        let a = students.map(students => students.ratingPoint);
        let b = a.filter(neu => neu >= 800);
        let cool = (b.sort((a, b) => b-a).splice(0, 5));
        for(let i of a){
            if(i >= 800){
                return Object.assign(students.map(o => ({...o, isSelfPayment: true})))
            } else {
                return false
            }
        }
        students.map(obj =>({...obj, isSelfPayment : isSelfPayment()}))


    }
}
let studentObj = new Student()
console.log(studentObj.isSelfPayment())

// task 2

class CustomString{
    constructor(reverse, ucFirst, ucWords){

    }
    reverse(text){
        return console.log(text.split("").reverse().join(""))
    }
    ucFirst(text){
        return console.log(text.charAt(0).toUpperCase() + text.slice(1))
    }
    ucWords(text){
        return console.log(text.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(' '))
    }
}
someStr = new CustomString()
console.log(someStr.ucWords('hello world and all!'))

// Задание 3

class Validator {
    constructor(checkIsEmail, checkIsDomain, checkIsDate, checkIsPhone){

    }
    checkIsEmail(text){
        if(text.slice(-4) === '.com'){
            return true
        } else {
            return console.log('Неверный формат ввода')
        }
    }
    checkIsDomain(text){
        if(text.length > 1 && text[2] != '-' && text[3] != '-' && (text[0] === 'string' || 'number') ){
            return true
        } else {
            return console.log('Неверный формат домина')
        }
    }
    checkIsDate(data){
        let nowData = new Date().toLocaleDateString();
        if(data == nowData){
            return true
        } else {
            return console.log('Неверный формат даты')
        }
    }
    checkIsPhone(phone){
        let a = phone.replace(/\D/g,'');
        // return console.log(a)
        if(a.substring(0, 3) === '380'){
            return true
        } else {
            return console.log('Неверный код региона')
        }
    }
}
let checker = new Validator()
console.log(checker.)
