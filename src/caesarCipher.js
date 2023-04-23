const caesarCipher = (() => {
  function encrypto(str, shift) {
    let result = ""; 
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (/[a-zA-Z]/.test(str[i])) {
        let baseCharCode = str[i] === str[i].toLowerCase() ? 97 : 65;
        charCode = ((charCode - baseCharCode + shift) % 26 + 26) % 26 + baseCharCode;
      }
      result += String.fromCharCode(charCode);
    }
  
    return result;
  }

    function decrypto(text, shift) {
      let result = ''
      for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
          result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65)
        } else if (charCode >= 97 && charCode <= 122) {
          result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97)
        } else {
          result += text.charAt(i)
        }
      }
      return result
    }
  return {encrypto, decrypto}
})()

export default caesarCipher