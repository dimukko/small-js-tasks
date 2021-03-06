/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/
/*  
    Удалить пробелы, знаки препинания и сделать все буквы одним регистром
    Если строка1 не равна строке2, то {
        Преобразовать строку в массив букв
        Сортировать и соединить обратно в строку
        Сравнить полученные строки, если равны, вернуть true
    Добавить проверку на идентичные слова
*/

function anagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/[\s,.!?-]/g, "");
    str2 = str2.toLowerCase().replace(/[\s,.!?-]/g, "");
    if (str1 !== str2) {
        return str1.split("").sort().join("") === str2.split("").sort().join("");
    }
    return false;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('god', 'dog'));
console.log(anagram('ропот ', 'топор!'));
console.log(anagram('up', 'UP'));

 /* 
 Принято!

 */