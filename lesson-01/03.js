/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0 // sum — переменная, в которую будет накапливаться сумма нечетных чисел. Изначально она равна 0
let number = 1 // number — переменная, которая используется для перебора чисел от 1 до 20. Изначально она равна 1

while (number <= 20) { // Этот цикл выполняется, пока значение переменной number меньше или равно 20. Каждый раз, когда выполняется тело цикла, происходит следующее:
  if (number % 2) { // Условие if (number % 2) проверяет, является ли текущее значение переменной number нечетным
    sum = sum + number; // Если число нечетное, оно прибавляется к переменной sum
  }
  number = number + 1 // Затем значение переменной number увеличивается на 1
}
console.log(sum); // После завершения цикла выводится итоговое значение переменной sum, которое содержит сумму всех нечетных чисел от 1 до 20


/* Пошаговый процесс:

Когда number = 1: 1 % 2 = 1 (нечетное), sum = 0 + 1 = 1
Когда number = 2: 2 % 2 = 0 (четное), sum не изменяется.
Когда number = 3: 3 % 2 = 1 (нечетное), sum = 1 + 3 = 4
Когда number = 4: 4 % 2 = 0 (четное), sum не изменяется.
Когда number = 5: 5 % 2 = 1 (нечетное), sum = 4 + 5 = 9
Когда number = 6: 6 % 2 = 0 (четное), sum не изменяется.
Когда number = 7: 7 % 2 = 1 (нечетное), sum = 9 + 7 = 16
Когда number = 8: 8 % 2 = 0 (четное), sum не изменяется.
Когда number = 9: 9 % 2 = 1 (нечетное), sum = 16 + 9 = 25
Когда number = 10: 10 % 2 = 0 (четное), sum не изменяется.
Когда number = 11: 11 % 2 = 1 (нечетное), sum = 25 + 11 = 36
Когда number = 12: 12 % 2 = 0 (четное), sum не изменяется.
Когда number = 13: 13 % 2 = 1 (нечетное), sum = 36 + 13 = 49
Когда number = 14: 14 % 2 = 0 (четное), sum не изменяется.
Когда number = 15: 15 % 2 = 1 (нечетное), sum = 49 + 15 = 64
Когда number = 16: 16 % 2 = 0 (четное), sum не изменяется.
Когда number = 17: 17 % 2 = 1 (нечетное), sum = 64 + 17 = 81
Когда number = 18: 18 % 2 = 0 (четное), sum не изменяется.
Когда number = 19: 19 % 2 = 1 (нечетное), sum = 81 + 19 = 100
Когда number = 20: 20 % 2 = 0 (четное), sum не изменяется.

После выполнения цикла значение переменной sum будет равно 100, что является суммой всех нечетных чисел от 1 до 20. */