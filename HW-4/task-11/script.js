/*Дан массив: `[[1, 2, 3,],[4, 5, 6]]`
Выведите в консоль массив вида: `[1, 2, 3, 4, 5, 6]*/

let arr = [[1, 2, 3,],[4, 5, 6]];
let newArr = [];

for (let arrIn of arr) {
    for(let elem of arrIn){
        newArr.push(elem);
    }
    
}
console.log(newArr);