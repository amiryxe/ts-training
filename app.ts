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

