const args = process.argv.slice(2);

if (args.length !== 1) {
    console.error('Please provide exactly one argument');
    return;
}

// Parse the arguments
const phrase = args[0];
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const vowels = 'aeiouy';
const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
const numbers = '0123456789';

const isNonValidPhrase = phrase.toLowerCase().split('').some(l => !(alphabet + punctuation + numbers).includes(l));

// Check if the user provided a valid phrase
if (isNonValidPhrase) {
    console.error('A phrase can only contain English alphabet letters');
    return;
}

// Pig Latin
const result = phrase.split(' ').map(word => {
    if ((punctuation + numbers).includes(word)) return word;
    let convertedWord = word.toLowerCase();

    if (vowels.includes(convertedWord[0])) {
        convertedWord =  convertedWord + 'way';
    } else if (vowels.includes(convertedWord[1])) {
        convertedWord = convertedWord.slice(1) + convertedWord[0] + 'ay';
    } else {
        convertedWord = convertedWord.slice(2) + convertedWord[0] + convertedWord[1] + 'ay';
    }

    if (/^[A-Z]/.test(word)) convertedWord = convertedWord[0].toUpperCase() + convertedWord.slice(1)

    return convertedWord;
}).join(' ');

console.log(result);
return;