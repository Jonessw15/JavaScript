const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2, 7, 8, 9, 'Jhonatan') 
const a4 = [...a1, ...a2, ...a3, 'Jones', ...[0, 0, 0]]

console.log(a4)