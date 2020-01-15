/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/
/*
    Объявить переменную и поместить в неё массив, созданный из строки методом split()
    Объявить переменную и поместить в неё копию массива up, созданную методом map()
    Коллбэк метода map():   первый символ элемента массива сделать прописным toUppercase()
                            извлечь оставшуюся часть элемента массива
                            конкатенацией получить элемент массива
    Вернуть преобразованный массив в строку методом join() 
*/

function capitalize(str) {
    if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || str.replace(/\s/g, "") === "") return str = '';
    const up = str.replace(/^(\s*)|(\s*)$/g, '').replace(/\s+/g, ' ').split(' ');
    const upperCasedWord = up.map(function (item) {
        return item[0].toUpperCase() + item.substr(1);
    });
    return upperCasedWord.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('старость '));
console.log(capitalize(''));


 /* 
 Принято!


Можно лучше:
                    
Вы используете нестрогое равенство ==, это не очень хорошо, используйте строгое === https://learn.javascript.ru/comparison#strogoe-sravnenie 
 */