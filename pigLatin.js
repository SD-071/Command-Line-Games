const input = process.argv.slice(2).join(" ");

if (!input) {
  console.log("Please provide a phrase to translate.");
  process.exit(1);
}

const words = input.split(" ");

function toPigLatin(word) {
  const lowerWord = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(lowerWord[0])) {
    return word + "way";
  }

  if (
    !vowels.includes(lowerWord[0]) &&
    !vowels.includes(lowerWord[1])
  ) {
    return word.slice(2) + word.slice(0, 2) + "ay";
  }

  return word.slice(1) + word[0] + "ay";
}

const result = words.map(toPigLatin).join(" ");
console.log(result);
