// 1 задание

const arr = ['Vasya', 'Petya', 'Alexey'];
const removeUser = (arr, i) => arr.slice(0, i-1).concat(arr.slice(i, arr.length))
console.log(removeUser(arr, 1))

// 2 задание

const obj = { name: 'Vasya', age: 1}
function getAllKeys(arr){
    key = [];
    for(let i in arr){
        key.push(i)
    }
    return key
}
console.log(getAllKeys(obj))

// task 3

const obj = { name: 'Vasya', age: 1}
function getAllKeys(arr){
    key = [];
    for(let i in arr){
        i = Object.values(arr)
        key.push(i)
        return key 
    }

}
console.log(getAllKeys(obj))

// task 4

const obj = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const arr = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];
function insertIntoarr(ar, i){
    let user = arr.find(item => item.id ==i )
 

let person = arr.splice(arr.indexOf(user), 0, ar)
return arr
}

console.log(insertIntoarr(obj, 2))

// task 5


class Condidate {
    constructor (obj) {
        for (let key in obj) {
            this[key] = obj[key];
        }
    }
    state () {
        return this.address.split(',')[2];
    }
}
const condidate = new Condidate(condidateArr[0]);
console.log(condidate.state);

// task 6
function getCompanyNames() {
    let companyArray = [];
    candidateArr.forEach((obj) => {
      if (companyArray.indexOf(obj.company) === -1) {
        companyArray.push(obj.company);
      }
    });
    return companyArray;
  }
  
  console.log(getCompanyNames())

// task 7
function getUsersByYear(year) {
    let userIdArray = [];
    candidateArr.forEach(element => {
        if (element.registered.substr(0,4) == year){
            userIdArray.push(element._id);
        }
    });
    return userIdArray;
}
console.log(getUsersByYear(2017));

// task 8

function getCandidatesByUnreadMsg(messages) {
    let newArr = candidateArr.filter(item => item.greeting.split(" ")[5] == messages);
    return newArr
}


console.log(getCandidatesByUnreadMsg(8));

// task 9

function getCandidatesByGender(gender) {
    let filteredArray = candidateArr.filter(element => element.gender == gender);
    return filteredArray;
}

console.log(getCandidatesByGender('male'));

// task 10

function reduceArr(array, func) {
    result = array[0];
    for (let i = 1; i < array.length; i++) {
        result = func(result, array[i]);
    }
    return result;
}

let reduceFunction = (a, b) => {
    return a + b;
}
function joinArr(array, joiner) {
  let str = "";
  array.forEach((element) => {
    if (array.indexOf(element) == array.length - 1) {
      str += element;
    } else {
      str += element + joiner;
    }
  });
  return str;
}

let array = ["a", "b", "c"];

let array1 = [2, 2, 3]

// console.log(joinArr(array, ""));

console.log(reduceArr(array1, reduceFunction));