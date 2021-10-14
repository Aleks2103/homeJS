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


function startTimer() {
    var min = 1;
    var sec = 60;
    var countdownTimer = setInterval(function() {
        console.log('0' +min + ':' + sec);
        sec--;
        if (sec < 0) {
            min --;
            sec =59;
        };
        if (sec.toString().length == 1){
            sec = '0' + sec;
        }
        if (min == 0 && sec == 0){
          clearTimeout(countdownTimer);
          console.log('0' +min + ':' + sec + '\n' + 'Time End')
        }
    }, 1000);
}
startTimer()
