"use strict";
// types for function parameters
function add(num1, num2) {
    return num1 + num2;
}
const result = add(5, 9);
console.log(result);
// types for objects
const myObject = {
    title: 'tv',
    price: 1200
};
console.log(myObject.title);
// type of values in array
const arr = [];
arr.push('test');
// arr.push(12) wrong value
// any can hold any types of values
const arr2 = [];
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
console.log(add3(5, 3, result => console.log(result)));
// unknown type
let val;
let str = 'test';
val = 12;
val = 'text';
if (typeof val === 'string') {
    val = str;
}
// class 
class Team {
    constructor(n) {
        this.members = [];
        this.name = n;
    }
    addMember(member) {
        this.members.push(member);
    }
    getMembers() {
        console.log(this.members.length, this.members);
    }
}
const newTeam = new Team('Sport');
newTeam.addMember('John');
newTeam.addMember('Sara');
newTeam.getMembers();
class Team2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
// inheritance
class DevTeam extends Team2 {
    constructor(id) {
        super(id, 'Test');
    }
}
const devTeam1 = new DevTeam(5);
console.log(devTeam1);
// protected
class Parent {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
        this.fullName = fname + ' ' + lname;
        this.status = true;
    }
    get getFullName() {
        return this.fullName;
    }
}
class Child1 extends Parent {
    constructor(txt1, txt2) {
        super(txt1, txt2);
    }
    get sayInfo() {
        if (this.status) {
            return 'Your full name is ' + this.getFullName;
        }
        return 'Disable Person: ' + this.getFullName;
    }
    set setStatus(status) {
        this.status = status;
    }
}
const obj1 = new Child1('Brad', 'Goodman');
// console.log(obj1.status) // Wrong access because status is a protected
console.log(obj1.firstName);
console.log(obj1.sayInfo);
obj1.setStatus = false;
console.log(obj1.sayInfo);
// Static methods
class Test2 {
    static createName(name) {
        return 'Name: ' + name;
    }
}
console.log(Test2.createName('David'));
// Abstract
class Test3 {
}
class ChildTest2 extends Test3 {
    constructor() {
        super(...arguments);
        this.name = 'Jack';
    }
    nameGenerator() {
        return 'Name is ' + this.name;
    }
}
// Private constructor
class Test4 {
    constructor(val) {
        console.log('Value is ', val);
    }
    static getInstance() {
        // ...
    }
}
let prd1;
prd1 = {
    name: 'Book',
    price: 100,
    prdInfo: (val) => val
};
class Role {
    constructor() {
        this.name = '';
        this.role = 'Admin';
    }
    info() {
        return 'Your name is ' + this.name + ' and your role is ' + this.role;
    }
}
