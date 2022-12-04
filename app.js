// types for function parameters
function add(num1, num2) {
    return num1 + num2;
}
var result = add(5, 9);
console.log(result);
// types for objects
var myObject = {
    title: 'tv',
    price: 1200
};
console.log(myObject.title);
// type of values in array
var arr = [];
arr.push('test');
// arr.push(12) wrong value
// any can hold any types of values
var arr2 = [];
arr2.push(true);
arr2.push(12);
arr2.push('test');
// union types
function add2(input1, input2, resultType) {
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultType === 'is-number') {
        return +input1 + +input2;
    }
    return '' + input1 + input2;
}
console.log(add2(12, 14, 'is-number'));
console.log(add2('a', 'b', 'is-text'));
// callback type
function add3(num1, num2, cb) {
    cb('Total of your numbers is ' + (num1 + num2));
    return num1 + num2;
}
console.log(add3(5, 3, function (result) { return console.log(result); }));
// unknown type
var val;
var str = 'test';
val = 12;
val = 'text';
if (typeof val === 'string') {
    val = str;
}
