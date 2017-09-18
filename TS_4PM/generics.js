function doReverse(list) {
    var revList = [];
    for (var i = (list.length - 1); i >= 0; i--) {
        revList.push(list[i]);
    }
    return revList;
}
var letters = ['a', 'b', 'c', 'd', 'e'];
var reversedLetters = doReverse(letters); // e, d, c, b, a
console.log(reversedLetters);
var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = doReverse(numbers); // 5, 4, 3, 2, 1
console.log(reversedNumbers);
