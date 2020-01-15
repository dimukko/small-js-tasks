/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 * 
*/

/*
    Честно, так и не разобрался как сделать, пришлось 
*/


function uniq(arr) {
    const filteredArr = arr.filter(function (item, index) {
        return arr.indexOf(item) === index;
    })
    return filteredArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq([1, 2, 5, 2, 1, 4, 2])); // [1, 2, 5, 4]
console.log(uniq([3, 3, 3, 5])); // [3, 5]
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]

 /* 
 Принято!

    Более коротким решением было бы:
	return [...new Set(arr)]
	
	В начале мы создаем специальный тип данных - Set из массива. Set может содержать только уникальные значения.
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set
	
	Далее с помощью деструктуризации [... ] мы создаем из Set массив
	https://learn.javascript.ru/destructuring
    

 */