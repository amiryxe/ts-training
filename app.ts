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