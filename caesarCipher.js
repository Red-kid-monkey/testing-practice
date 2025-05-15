function IsUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

function IsLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function shiftLetter(letter, shift) {
    const isLower = IsLowerCaseLetter(letter);
    const isUpper = IsUpperCaseLetter(letter);

    if (!isLower && !isUpper) {
        return letter; // Non-alphabetic characters remain unchanged
    }

    const baseCharCode = isLower ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
    const letterPosition = letter.charCodeAt(0) - baseCharCode;
    const shiftedPosition = (letterPosition + shift) % 26;


    const newPosition = shiftedPosition >= 0 ? shiftedPosition : shiftedPosition + 26;

    return String.fromCharCode(baseCharCode + newPosition);
}

function caesarCipher(String, shift) {
    return String
        .split('')
        .map(char => shiftLetter(char, shift))
        .join('');
}

export default caesarCipher;