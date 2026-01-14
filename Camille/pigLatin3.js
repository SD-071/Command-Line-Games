const input = process.argv.slice(2);

if (input.length === 0) {
    console.log("Please enter a valid text to translate into Pig Latin.");
    process.exit();
}

for (let i = 0; i < input.length; i++) {
    const word = input[i].toLowerCase();
    const firstletter = word[0];
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(firstletter)) {
        // If the first letter is a vowel, add "way" to the end
        input[i] = word + "way";
    } else if (!vowels.includes(firstletter) && !vowels.includes(word[1])) {
        // if the two first letters are consonants
        const firstTwoLetters = word.slice(0, 2);
        input[i] = word.slice(2) + firstTwoLetters + "ay";
    } else {
        // If the first letter is a consonant, move it to the end and add "ay"
        input[i] = word.slice(1) + firstletter + "ay";
    };
};

console.log("Pig Latin: ", input.join(" "));


