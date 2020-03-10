const wrapCharacter = (character, key) => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  let wrapCharacterIndex;

  for(const index in alphabet) {
    if(character === alphabet[index]) {
      wrapCharacterIndex = index; 
    }
  }

wrapCharacterIndex = parseInt(wrapCharacterIndex) + parseInt(key);
if (wrapCharacterIndex < 0) {
  wrapCharacterIndex = wrapCharacterIndex + 26;
} else if (wrapCharacterIndex > 25) {
  wrapCharacterIndex = wrapCharacterIndex - 26;
}
  return alphabet[wrapCharacterIndex];

}

const encrypt = (plaintext, key) => {

  let finalString = "";

  const characterNoSpace = plaintext.toLowerCase().replace(/\s/g, "");
  if( characterNoSpace.length === 1) {
    return wrapCharacter(characterNoSpace, key);

  } else {
    const plainTextArray = plaintext.toLowerCase().split(" ");
    const plainTextArrayNoSpaces = [];

    for(const item of plainTextArray) {
      if(item !=="") {
        plainTextArrayNoSpaces.push(item);
      }
    }

    let wrappedPhrase = [];
    for(const word of plainTextArrayNoSpaces) {
      let wrappedWord = "";
      for (const character of word){
        wrappedWord += wrapCharacter(character, key);
      }
      wrappedPhrase.push(wrappedWord);
    }

    finalString = wrappedPhrase.join(" ");
  }
  return finalString;
};

module.exports = { encrypt, wrapCharacter };

