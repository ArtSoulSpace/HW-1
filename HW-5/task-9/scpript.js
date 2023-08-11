/* Создайте калькулятор, который будет считать площадь треугольника по трём сторонам.*/ 

function squareTriangle() {
    let a = Number(prompt('Введите значение стороны а'));
    let b = Number(prompt('Введите значение стороны b'));
    let c = Number(prompt('Введите значение стороны c'));

    let p = (a + b + c) / 2; /*полупериметр*/

    let square = Math.sqrt(p*(p - a)*(p - b)*(p - c));
    alert(square);
}