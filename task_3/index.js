function findFirstStringInBracket (str) {

    const checkLength = str.length > 0
    const indexFristBracket = checkLength && str.indexOf("(")
    const indexClosingBracketFound = checkLength && str.indexOf(")");

    if (indexFristBracket >= 0 && indexClosingBracketFound) {
        return str.substring(indexFristBracket + 1, indexClosingBracketFound)
    } else {
        return '';
    }
}

console.log((findFirstStringInBracket("asfdas(asdfasd)")))