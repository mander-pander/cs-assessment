//1. Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

//receiving an array of numbers
//loop through the array and add each number to every other number in array with second loop to determine if they are equal to zero
//if numbers aren't at the same index and = 0, return true
//otherwise return false - no numbers add up to zero

const addToZero = arr => {
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === 0) {
            return true;
            }
        }
    }
    return false;
}

//runtime = O(n^2), not efficient
//space = O(1)

// console.log(addToZero([1, 2, 3, -2]));
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([-4, 2, 6, -6]))

//2. Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

//given a word
//set stores UNIQUE values
//change all letters to lowercase
//if a new set of the given word is not the same length as that word, then non-unique values were removed

// const hasUniqueChars = word => {
//     word = word.toLowerCase();
//     return new Set(word).size === word.length;
// }

const hasUniqueChars = word => {
    word=word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
               return false;
            }
        }
    }   return true;
}
//runtime: O(n^2)
//space = O(n)

// console.log(hasUniqueChars("Monday"));
// console.log(hasUniqueChars("MOonday"));

//3. A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.” Write a function to check a sentence to see if it is a pangram or not.

//checking to see if given sentence contains every letter of alphabet
//convert sentence to lowercase
//create alphabet variable to refer to
//loop through alphabet
//if indexOf the current letter of alphabet is -1 in the sentence, return false
//otherwise return true

// const isPangram = sentence => {
//     sentence = sentence.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     for(let letter = 0; letter < alphabet.length; letter++) {
//         if(sentence.indexOf(alphabet[letter]) === -1) {
//             return false
//         }
//     }
//     return true;
// }

const isPangram = str => {
    str = str.toLowerCase().replace(/([^a-z])+/g, '');
    let map = {};

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (map[letter]) {
            map[letter] += 1;
        } else {
            map[letter] = 1
        }
    }

    let count = 0;
    for(let key in map) {
        count++;
    }

    if(count >= 26){
        return true;
    } else {
        return false;
    }
}

//runtime: O(n)
//space: O(n)

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

//4. Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

//returning length of longest word from a list of words
//create variable to store length of what is the current longest word, set equal to length of first word as a starting point
//loop through words starting at second word, if any lengths are longer than current longest word, replace it with that word

const findLongestWord = wordArr => {
    let longestLength = wordArr[0].length;
    for (let i = 1; i < wordArr.length; i++) {
        if(wordArr[i].length > longestLength) {
            longestLength = wordArr[i].length;
        }
    }
    return longestLength;
}

//runtime: O(n)
//space: O(1)

// console.log(findLongestWord(["hi", "hello"]));
// console.log(findLongestWord(['penguin', 'dog', 'cat', 'horse', 'bird']));
