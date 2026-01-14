let input = process.argv[2];

// Split words into alphabets
let alphabets = input.split(" ");
let result = "";

let vowels = ["a", "e", "i", "o", "u"];

// Loop through each alphabets
for (let i = 0; i < alphabets.length; i++) 
{
  let word = alphabets[i];
  let firstLetter = word[0];
  let secondLetter = word[1];

  // If a word starts with a vowel add the word “way” at the end of the word.
  if (vowels.includes(firstLetter)) 
    {result = word + "way ";}

  // If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
  else if (!vowels.includes(firstLetter) && !vowels.includes(secondLetter)) 
    {result = word.slice(2) + word[0] + word[1] + "ay ";}

  // If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
  else {result = word.slice(1) + word[0] + "ay ";}
}

// Output result
console.log(result);