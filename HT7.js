// task 1
function searchCandidatesByPhoneNumber(phoneNum){
    let phoneFilteredArray = [];
    let checkNum = phoneNum.split(' ').join('');
    candidateArr.forEach(element => {
        let candidateNumber = element.phone.split(' ').join('');
        if (candidateNumber.indexOf(checkNum) != -1){
            phoneFilteredArray.push(element);
        }

    });
    return phoneFilteredArray;
}
console.log(searchCandidatesByPhoneNumber('43')); 
console.log(searchCandidatesByPhoneNumber('1(803)433'));
console.log(searchCandidatesByPhoneNumber('+1(869) 408-3982')); 

// task 2

const getCandidateById = candidateId => {
    candidateArr.forEach(element => {
        if (element._id === candidateId) {
            let regDate = new Date (element.registered);
            let year = regDate.getFullYear();
            let month = regDate.getMonth()+1;
            let day = regDate.getDate();
            element.registered = `${day}/${month}/${year}`;
            console.log(element);
        }     
    });
}

console.log(getCandidateById('5e216bc9f51c08c39c3ed006'));

// task 2

const getCandidateById = candidateId => {
    candidateArr.forEach(element => {
        if (element._id === candidateId) {
            let regDate = new Date (element.registered);
            let year = regDate.getFullYear();
            let month = regDate.getMonth()+1;
            let day = regDate.getDate();
            element.registered = `${day}/${month}/${year}`;
            console.log(element);
        }     
    });
}

console.log(getCandidateById('5e216bc9f51c08c39c3ed006'));

// task 3

const sortCandidatesArr = sortBy => {
    if (sortBy) {
        if (sortBy === 'asc') {
            candidateArr.sort((a,b) => (a.balance > b.balance) ? 1 : ((b.balance > a.balance) ? -1 : 0));
            return candidateArr;
        }
        if (sortBy === 'desc') {
            candidateArr.sort((a,b) => (a.balance < b.balance) ? 1 : ((b.balance < a.balance) ? -1 : 0));
            return candidateArr;
        }
    } else {
        return candidateArr;
    }
}
console.log(sortCandidatesArr('asc'));

// task 4

const getEyeColorMap = () => {
    eyeColorMap = {};
    candidateArr.forEach(element => {
        let newColor = element.eyeColor;
        if (!eyeColorMap[newColor]){
            eyeColorMap[newColor] = candidateArr.filter(arrItem => arrItem.eyeColor == newColor);
        }
    });
    return eyeColorMap;
}

console.log(getEyeColorMap());