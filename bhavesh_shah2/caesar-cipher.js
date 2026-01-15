function caesarCipher(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char.match(/[a-z]/i)) {
      const code = text.charCodeAt(i);

      let base = code >= 65 && code <= 90 ? 65 : 97;
      char = String.fromCharCode(((code - base + shift) % 26) + base);
    }

    result += char;
  }

  return result;
}

const cipherText = process.argv[2];
const cipherValue = process.argv[3];

if (isNaN(cipherValue)) {
  console.log("Please provide a valid number for the cipher shift value.");
  process.exit(1);
}

const shiftedText = caesarCipher(cipherText, parseInt(cipherValue));

console.log("Shifted Text: " + shiftedText);
