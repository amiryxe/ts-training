// define types and set aliases
type InputTypes = number | string
type ResultTypes = 'is-number' | 'is-text'

// types for function parameters
function add(num1: number, num2: number) {
    return num1 + num2
}

const result = add(5, 9)

console.log(result)

// types for objects
const myObject: {
    title: string
    price: number
} = {
    title: 'tv',
    price: 1200
}

console.log(myObject.title)

// type of values in array
const arr: string[] = []
arr.push('test')
// arr.push(12) wrong value

// any can hold any types of values
const arr2: any[] = []
arr2.push(true)
arr2.push(12)
arr2.push('test')

// union types
function add2(input1: InputTypes, input2: InputTypes, resultType: ResultTypes) {
    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resultType === 'is-number'
    ) {
        return +input1 + +input2
    }

    return '' + input1 + input2
}

console.log(add2(12, 14, 'is-number'))
console.log(add2('a', 'b', 'is-text'))

// callback type
function add3(num1: number, num2: number, cb: (a: number | string) => void): number {
    cb('Total of your numbers is ' + (num1 + num2))
    return num1 + num2
}

console.log(add3(5, 3, result => console.log(result)))

// unknown type
let val: unknown
let str: string = 'test'
val = 12
val = 'text'

if (typeof val === 'string') {
    val = str
}

// class 
class Team {
    public name: string
    private members: string[] = []

    constructor(n: string) {
        this.name = n
    }

    addMember(member: string) {
        this.members.push(member)
    }

    getMembers() {
        console.log(this.members.length, this.members)
    }
}

const newTeam = new Team('Sport')

newTeam.addMember('John')
newTeam.addMember('Sara')
newTeam.getMembers()

class Team2 {
    constructor(private id: number, public name: string) {
    }
}

// inheritance
class DevTeam extends Team2 {
    constructor(id: number) {
        super(id, 'Test')
    }
}

const devTeam1 = new DevTeam(5)
console.log(devTeam1)

// protected
class Parent {
    private fullName: string
    public firstName: string
    public lastName: string
    protected status: boolean

    constructor(fname: string, lname: string) {
        this.firstName = fname
        this.lastName = lname
        this.fullName = fname + ' ' + lname
        this.status = true
    }

    get getFullName() {
        return this.fullName
    }
}

class Child1 extends Parent {
    constructor(txt1: string, txt2: string) {
        super(txt1, txt2)
    }

    get sayInfo() {
        if (this.status) {
            return 'Your full name is ' + this.getFullName
        }

        return 'Disable Person: ' + this.getFullName
    }

    set setStatus(status: boolean) {
        this.status = status
    }
}

const obj1 = new Child1('Brad', 'Goodman')
// console.log(obj1.status) // Wrong access because status is a protected

console.log(obj1.firstName);
console.log(obj1.sayInfo);
obj1.setStatus = false

console.log(obj1.sayInfo)

// Static methods
class Test2 {
    static createName(name: string) {
        return 'Name: ' + name
    }
}

console.log(Test2.createName('David'))

// Abstract
abstract class Test3 {
    abstract name: string

    abstract nameGenerator(): void
}

class ChildTest2 extends Test3 {
    name: string = 'Jack'

    nameGenerator() {
        return 'Name is ' + this.name
    }
}

// Private constructor
class Test4 {
    private constructor(val: string) {
        console.log('Value is ', val)
    }

    static getInstance() {
        // ...
    }
}

// Interface
interface Product {
    name: string
    price: number

    prdInfo(describe: string): void
}

let prd1: Product

prd1 = {
    name: 'Book',
    price: 100,
    prdInfo: (val) => val
}

// Interface in classes
interface User {
    name: string
    info(text: string): void
}

class Role implements User {
    name: string = ''
    role: string = 'Admin'

    info() {
        return 'Your name is ' + this.name + ' and your role is ' + this.role
    }
}

// Decorators
function Logger(target: Function) {
    console.log('Logger')
}

@Logger
class Test5 {
    constructor() {
        console.log('anything')
    }
}

/*
    The type is not explicitly defined for this variable,
    but the initial value of its number causes it to take a numeric type,
    and after that it receives nothing but a number:
*/
let num = 14
// num = 'test'  // ERROR


const obj2: {
    name: string
    age: 20 // just accept number 20
} = {
    name: 'amir',
    age: 20
}

// Enum
enum TestEnum {
    ADMIN,
    USER,
    GUEST
}

console.log(TestEnum.ADMIN)

// Enum with values
enum TestEnum2 {
    RED = 'RED',
    GREEN = 'GREEN',
    BLUE = 'BLUE',
}

console.log(TestEnum2.GREEN)

class Department {
    name: string

    constructor(n: string) {
        this.name = n
    }

    sayMyName(this: Department) { // pass this to method
        return 'Your name is ' + this.name
    }
}

const dp1 = new Department('Jack')
console.log(dp1.sayMyName())

const dp2 = new Department('Jimmy')

const dpObj = { name: 'anything', sayMyName: dp2.sayMyName } // about 'this' problem
console.log(dpObj.sayMyName())


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

    constructor(private id: string, private name: string, private age: number) {
        // don't need to set values it set automatically
    }

    getData() {
        return {
            id: this.id,
            name: this.name,
            age: this.age
        }
    }
}

const t6 = new Test6('1-00-3', 'sample name', 29)
console.log(t6.getData())

// inheritance
class Child extends Test6 {
    // no constructor
}

const ch1 = new Child('1-44', 'test', 25)
console.log(ch1.getData())

// use super in classes
class ParentTest1 {
    constructor(public id: number, public name: string) {

    }
}

class ChildTest1 extends ParentTest1 {
    constructor(public type: string) {
        super(1, 'Micky')
    }

    say() {
        return 'Your name is ' + this.name + ' and your type is ' + this.type
    }
}

const chTest1 = new ChildTest1('Admin')
console.log(chTest1.say())