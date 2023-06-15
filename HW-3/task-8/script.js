/* Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. 
Придумайте, как должна работать функция, если ей передать неправильный параметр. 
Выведите пример использования функции в консоль.
**Подсказка: для решения задачи используйте `switch`.*/
function dayOfTheWeek() {
  let day = Number(prompt("Введите число от 1 до 7"));
  switch (day) {
    case 1:
      console.log("Понельник");
      break;
    case 2:
      console.log("Вторник");
      break;
    case 3:
      console.log("Среда");
      break;
    case 4:
      console.log("Четверг");
      break;
    case 5:
      console.log("Пятница");
      break;
    case 6:
      console.log("Суббота");
      break;
    case 7:
      console.log("Воскрескнье");
      break;

    default:
        console.log('Error');
      break;
  }
}

dayOfTheWeek();
