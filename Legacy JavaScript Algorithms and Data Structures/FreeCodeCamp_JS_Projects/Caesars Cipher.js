function rot13(str) {

  let decodedStr = '';
  const UCODEA = 65;
  const UCODEN = 78;
  const UCODEZ = 90;

  for(let i = 0, charCode; i < str.length; i++)
  {
    charCode = str.charCodeAt(i);

    if(charCode < UCODEA || charCode > UCODEZ) {
    decodedStr = decodedStr.concat(String.fromCharCode(charCode)); continue;}

    if(charCode < UCODEN) {
      decodedStr = decodedStr
      .concat(String.fromCharCode(UCODEZ - (13 - (charCode - UCODEA + 1)) ));
      continue;}

    decodedStr = decodedStr.concat(String.fromCharCode(charCode - 13))
  }

  return decodedStr;
}

rot13("SERR PBQR PNZC");