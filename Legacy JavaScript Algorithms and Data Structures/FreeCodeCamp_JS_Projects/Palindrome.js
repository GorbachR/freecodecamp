function palindrome(str) {
  str = str.replace(/[\W_]/g, "").toLowerCase();

  const iterator = str[Symbol.iterator]();
  let char = iterator.next();
  let comparisonStr = "";

  while (char.value) {
    comparisonStr = char.value.concat(comparisonStr);
    char = iterator.next();
  }

  return str === comparisonStr ? true : false;
}

palindrome("eye");
