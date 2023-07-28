/* Создайте массив, состоящий из 4 произвольных значений, которые генерируются программой (диапазон значений от 1 до 10). 
Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
Результаты этих двух операций сложите. Выведите на экран данный массив и полученный результат.*/

function sumArr(){
    let arr = [];
    for(let i = 0; i < 4; i++){
        arr.push(Math.floor(Math.random() * 10));  
    }
    console.log(arr);
    const mult = arr.reduce((acc, rec) => acc * rec);
    console.log(mult);
  
    const sum = mult.toString()
    .split('')
    .map(Number)
    .reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum);
}

sumArr();
