function doReverse<T>(list: T[]): T[] {
    let revList: T[] = [];
    for (let i = (list.length - 1); i >= 0; i--) {
        revList.push(list[i]);
    }
    return revList;
}
let letters = ['a', 'b', 'c', 'd', 'e'];
let reversedLetters = doReverse<string>(letters); // e, d, c, b, a
console.log(reversedLetters);

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = doReverse<number>(numbers); // 5, 4, 3, 2, 1
console.log(reversedNumbers);