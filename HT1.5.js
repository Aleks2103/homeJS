
const medianNumber = 8
let cristmasTree =(n, s) => {
    let box = '';
    for (let i = 0; i < n; i += 1) {
        box += '-'.repeat(n-i-1) + s.repeat(2*i+1) + '-'.repeat(n-i-1)+ "\n";
    }
    return box;
};
let box = cristmasTree(medianNumber, '#');
console.log(box);


