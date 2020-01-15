/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
 */

/*
    Проверить тип данных входящего аргумента == строка, если нет - преобразуем в строку.
    Удалить пробелы, знаки препинания и сделать все буквы одним регистром (в проверках ниже есть и то и другое)
    Сравнить посимвольно. Сравниваем до половины длины строки, символ в центре строки не важен, поскольку все палиндромы содержат нечётное количество символов.
    Количество итераций цикла должно быть меньше половины длины строки.
    Если соответствующий символ сначала строки не равен символу с конца строки возвращаем false.
    В противном случае возвращаем true    
 */

function palindrome(str) {
  str = typeof str !== "string" ? str + "" : str;
  str = str.toLowerCase().replace(/[\s,.!?-]/g, "");
  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      return false;
    }
  }
  return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome("топот")); // true
console.log(palindrome("Saippuakivikauppias")); // true
console.log(palindrome("привет")); // false
console.log(palindrome("ротатор")); //true
console.log(palindrome("пока")); //false
/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 */

console.log(palindrome("О, лета тело!")); //true
console.log(palindrome("s33455433s")); //true
console.log(palindrome(33533533)); //true - хмм..
console.log(palindrome(3356533)); //true


 /* 
 Принято!

    Более коротким решением было бы:
	str = str.toLowerCase();
	return str === str.split('').reverse().join('');
	
	split - создает массив из элементов строки (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split)
	reverse - переворачивает массив (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
	join - создает строку из элементов массива (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
    

Можно лучше:
                    
    Конструкцию
        if(...) {
            return true
        } else {
            return false
        }
    
    Можно упростить переписав как - return ...
     
 */