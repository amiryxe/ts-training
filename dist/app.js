"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// Decorators
function Logger(target) {
    console.log('Logger');
}
let Test5 = class Test5 {
    constructor() {
        console.log('anything');
    }
};
Test5 = __decorate([
    Logger
], Test5);
/*
    The type is not explicitly defined for this variable,
    but the initial value of its number causes it to take a numeric type,
    and after that it receives nothing but a number:
*/
let num = 14;
// num = 'test'  // ERROR
const obj2 = {
    name: 'amir',
    age: 20
};
// Enum
var TestEnum;
(function (TestEnum) {
    TestEnum[TestEnum["ADMIN"] = 0] = "ADMIN";
    TestEnum[TestEnum["USER"] = 1] = "USER";
    TestEnum[TestEnum["GUEST"] = 2] = "GUEST";
})(TestEnum || (TestEnum = {}));
console.log(TestEnum.ADMIN);
// Enum with values
var TestEnum2;
(function (TestEnum2) {
    TestEnum2["RED"] = "RED";
    TestEnum2["GREEN"] = "GREEN";
    TestEnum2["BLUE"] = "BLUE";
})(TestEnum2 || (TestEnum2 = {}));
console.log(TestEnum2.GREEN);
class Department {
    constructor(n) {
        this.name = n;
    }
    sayMyName() {
        return 'Your name is ' + this.name;
    }
}
const dp1 = new Department('Jack');
console.log(dp1.sayMyName());
const dp2 = new Department('Jimmy');
const dpObj = { name: 'anything', sayMyName: dp2.sayMyName }; // about 'this' problem
console.log(dpObj.sayMyName());
// summary class 
class Test6 {
    // private id: string
    // private name: string
    // private age: number
    // constructor(inputID: string, inputName: string, inputAge: number) {
    //     this.id = inputID
    //     this.name = inputName
    //     this.age = inputAge
    // }
    // The above codes can be summarized as follows:
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        // don't need to set values it set automatically
    }
    getData() {
        return {
            id: this.id,
            name: this.name,
            age: this.age
        };
    }
}
const t6 = new Test6('1-00-3', 'sample name', 29);
console.log(t6.getData());
// inheritance
class Child extends Test6 {
}
const ch1 = new Child('1-44', 'test', 25);
console.log(ch1.getData());
// use super in classes
class ParentTest1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class ChildTest1 extends ParentTest1 {
    constructor(type) {
        super(1, 'Micky');
        this.type = type;
    }
    say() {
        return 'Your name is ' + this.name + ' and your type is ' + this.type;
    }
}
const chTest1 = new ChildTest1('Admin');
console.log(chTest1.say());
