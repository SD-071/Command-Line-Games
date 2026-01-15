console.log("Welcome to Pig Latin!\n");

const vowels = ['a', 'e', 'i', 'o', 'u'];
function isVowel(char) {
    return vowels.includes(char.toLowerCase());
}

const userInput = process.argv.slice(2);
const result = userInput.map(wordProccessor); // apply latin processor
console.log('🐷', result.join(' '));

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function wordProccessor(word) {
    const firstLetter = word.substring(0, 1).toLowerCase();
    const secondLetter = word.substring(1, 2).toLowerCase();

    // pre-capitalized result
    let result = word;

    // will apply capitalization for the word capitalization detected
    let isCapitalized = word.charAt(0) === word.charAt(0).toLowerCase();

    if (!isVowel(firstLetter) && isVowel(secondLetter)) {
        // put the first letter of the word at the end of the word and add “ay.”
        result = `${word.slice(1)}${firstLetter}ay`;

    } else if (!isVowel(firstLetter) && !isVowel(secondLetter)) {
        // move the two consonants to the end of the word and add “ay.”
        const sliced = word.slice(2);
        result = `${sliced}${firstLetter}${secondLetter}ay`;

    } else if (isVowel(firstLetter)) {
        // add the word “way” at the end of the word.
        result = `${word}way`;

    } else {
        // do nothing
        return word;
    }

    if (!isCapitalized) {
        // quick capitalization of the word
        return capitalize(result);
    } else {
        // return processed result
        return result;
    }
}