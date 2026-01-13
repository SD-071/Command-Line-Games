const args = process.argv.slice(2);

if (args.length !== 2) {
    console.error('Please provide exactly two arguments');
    return;
}

// Parse the arguments
const phrase = args[0].toLowerCase();
const shiftNumber = parseInt(args[1]);
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
const numbers = '0123456789';

const isNonValidPhrase = phrase.split('').some(l => !(alphabet + punctuation + numbers).includes(l));

// Check if the user provided a valid phrase
if (isNonValidPhrase) {
    console.error('A phrase can only contain English alphabet letters');
    return;
}

// Check if the user provided a number
if (isNaN(shiftNumber)) {
    console.error('Second argument must be a number');
    return;
}

// Ceasar cipher
const result = phrase.split('').map(l => {
    if ((punctuation + numbers).includes(l)) return l;
    let shiftedIndex = alphabet.indexOf(l) + shiftNumber % 26;
    if (shiftedIndex > 25) {
        shiftedIndex = shiftedIndex - 26;
    } else if (shiftedIndex < 0) {
        shiftedIndex = shiftedIndex + 26;
    }
    return alphabet[shiftedIndex];
}).join('');

console.log(result);
return;