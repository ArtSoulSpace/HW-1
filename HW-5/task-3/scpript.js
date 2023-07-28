/*Дано четырехзначное число. Найдите сумму цифр этого числа.*/

function sumNum(){
    let num = Math.floor(Math.random() * 10000);
    console.log(num);

    const sum = num.toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0);
    console.log(sum);
}

sumNum()