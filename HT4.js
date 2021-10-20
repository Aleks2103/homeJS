// Массив employeeArr

const emplyeeArr = [
    {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010, 
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200, 
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 3,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480, 
        workExperience: 3, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 4,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430, 
        workExperience: 20, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'female'
    },
    {
        id: 5,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 3150, 
        workExperience: 30, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 6,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 1730, 
        workExperience: 15, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 7,
        name: 'Денис',
        surname: 'Марченко',
        salary: 5730, 
        workExperience: 45, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'male'
    },
    {
        id: 8,
        name: 'Максим',
        surname: 'Меженский',
        salary: 4190, 
        workExperience: 39, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 9,
        name: 'Антон',
        surname: 'Завадский',
        salary: 790, 
        workExperience: 7, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 10,
        name: 'Инна',
        surname: 'Скакунова',
        salary: 5260, 
        workExperience: 49, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 11,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 300, 
        workExperience: 1, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
];


// задание с урока
let ret = {
    id: 0,
    name: 'Valeriy',
    surname: 'Zhmishenko',
    salary: 1000, 
    workExperience: 10, 
    isPrivileges: true, 
    gender: 'male',
    restr:{
        id: 0,
        name: 'Valik',
        surname: 'Pupkin',
        salary: 2000, 
        workExperience: 15, 
        isPrivileges: false, 
        gender: 'famele',
        }
    }

let ret2 ={};
function copyObject (obj, newObject){
    for(let key in ret){
    ret2[key] = ret[key]
    if(typeof ret == !'object'){
        return copyObject()
    }
    
    }
}
copyObject(ret, ret2)
console.log(ret2)






// 1 задние
let employeeObj = new Emploee(emplyeeArr[0]);
function Emploee(al){
    this.id = al.id;        
    this.name = al.name;        
    this.surname = al.surname;        
    this.salary = al.salary;         
    this.workExperience = al.workExperience; /// стаж работы (1 = один месяц)        
    this.isPrivileges = al.isPrivileges; /// льготы        
    this.gender = al.gender;
    this.FullName = al.name + ' ' + al.surname;


    
    //2 задание
    this.getFullName = function () {
    console.log(`${this.surname} ${this.name}`);
        
    }
}
console.log(employeeObj)
employeeObj.getFullName();


// задание 3


// задание 4

console.log(emplyeeArr.map(({name, surname}) => name + ' ' + surname))

// задание 5

a = emplyeeArr.map(({salary}) => salary)
const sum = a.reduce(add,0);
function add(accumulator, a) {
    return (accumulator + a);
}
console.log(Math.floor(sum / emplyeeArr.length))

// 6 задание

console.log(emplyeeArr[Math.floor(Math.random()*emplyeeArr.length)])

// getter and setter


let employeeObjl = new Emploeel(emplyeeArr[0]);
function Emploeel(all){
    this.id = all.id;        
    this.name = all.name;        
    this.surname = all.surname;        
    this.salary = all.salary;         
    this.workExperience = all.workExperience; /// стаж работы (1 = один месяц)        
    this.isPrivileges = all.isPrivileges; /// льготы        
    this.gender = all.gender;
    // this.FullName = all.name + ' ' + all.surname;
    // this.getFullName = function () {
    // console.log(`${this.surname} ${this.name}`);  
    // }
}
Object.defineProperty(employeeObjl, 'fullInfo', {
    get: function(){
        let a='';
        for(key of Object.keys(employeeObjl)){
            a += key + ' - ' + employeeObjl[key] + ', '
        }
        return a
    }
});
console.log(employeeObjl.fullInfo)

// Если свойства в передаваемом объекте не было объявленно в классе, то это свойство не записываем в экземпляр

let employeeO = {
    id: 1,
    name: 'Вася',
    surname: 'Хрущ',
    salary: 9000,
    workExperience: 10,
    isPrivileges: false,
    gender: 'male',
}
Object.defineProperty(employeeO, 'age', {
    value: 37,
    writable: false,
    enumerable: true,
    configurable: true
})
Object.preventExtensions(employeeO);
employeeO.mail = 'jhgfdsdfghjfds'
employeeO.name= 'Petya'
console.log(employeeO)


// 2 задание с урока
const user = {
    name: 'Ivan',
    surname: 'Ivanov',
    address: {
        stret : 'chkalova',
        HouseNumber: '7'
    }
}
let user2={};
function freezer() {
    for(user2 in user){
        user2 = Object.freeze(user2)
        if(Object.values(user2) !== 'object'){
            user2 == Object.freeze(user2)
        }
    }
    return user2 = Object.freeze(user2)
}
freezer(user)

console.log(freezer(user))
user.address.stret = 'fdsa'
console.log(user.address)                        