const number = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [firstNumber, secondNumber, ...rest] = number
console.log(firstNumber, secondNumber)
console.log(rest)

const num = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(num[1][2])
