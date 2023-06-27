// Дана строка: `‘abcdef’`Необходимо, чтобы программа вывела в консоль `‘fedcba’`

let letters = 'abcdef';
console.log(letters.split('').reverse().join(''));