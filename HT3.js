function counter (val) {
    var kol = val;
    counter = function (){
        var arg = arguments[0] ? arguments[0] : 0;
        return kol = kol + arg;
    };
    return counter();
    }
console.log(counter(3));
console.log(counter(5));
console.log(counter(228));





// 2task -----------------


function getUpdatedArr(val) {
    let arr = [];
    getUpdatedArr = function (){
        let arg = arguments[0] ? arguments[0] : null;
        arr[arr.length] = arg;
        if(!arg) arr = [];
        return arr;
    };
    return getUpdatedArr(val);
}

console.log([getUpdatedArr(3)]);
console.log([getUpdatedArr(5)]);
console.log([getUpdatedArr({name: 'Vasya'})]);
console.log([getUpdatedArr()]);
console.log([getUpdatedArr(4)]);



// 3 task --------------------------

function getTime() {
    let arr = [];
    getTime = function (){
        let now = Date.now();
        if(arr.length) {
            let lastTimeStart = (now - arr[arr.length - 1]) / 1000;
            console.log('Запускаем через ' + lastTimeStart + ' сек');
        } else {
            console.log('Enabled');
        }
        arr.push(Date.now());
    };
    getTime();
}



// 4 task --------------------------





// function startSecondTimer() {
//     var i = 60;
//     var countdownTimer = setInterval(function() {
//         console.log(i);
//         i = i - 1;
//         if (i <= 0) {
//             clearTimeout(countdownTimer);
//         }
//     }, 1000);
// }

// function startMinutTimer() {
//     var j = 5;
//     var countdownTimer = setInterval(function() {
//         console.log(j);
//         j = j - 1;
//         if (j <= 0) {
//             clearTimeout(countdownTimer);
//         }
//     }, 60000);
// }

function startTimer(from, to) {
    let current = from;
    
    let timerId = setInterval(function() {
      console.log(':' + current);
      if (current == to) {
        clearInterval(timerId);
      }
      current--;
    }, 1000);
  }
startTimer(60, 0);