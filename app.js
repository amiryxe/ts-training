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
function add2(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    return '' + input1 + input2;
}
console.log(add2(12, 14));
console.log(add2('a', 'b'));
