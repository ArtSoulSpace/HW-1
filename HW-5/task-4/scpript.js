/*Создайте массив, состоящий из 4 произвольных значений, которые генерируются программой (диапазон значений от 1 до 10). 
Возведите каждый элемент этого массива в куб.*/ 

function arrayCube() {
    let arr = [];
    for(let i = 0; i < 4; i++){
        arr.push(Math.floor(Math.random() * 10));
    }
    console.log(arr);
    arr = arr.map(el => el **3);
    console.log(arr);
}
arrayCube()
