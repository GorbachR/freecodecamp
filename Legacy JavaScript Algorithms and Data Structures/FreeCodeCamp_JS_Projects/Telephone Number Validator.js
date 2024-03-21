function telephoneCheck(str) {

  const validFormat = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\(\d{3}\)\u0020\d{3}-\d{4}$/,
    /^\d{3}\u0020\d{3}\u0020\d{4}$/,
    /^\d{10}$/
  ]

    if(/^\d[\u0020\(]?/.test(str) && /^1/.test(str)){
    str = str.replace(/^1/, ""); 
    str = str.trim();}

  return validFormat.some((regExp) => regExp.test(str))
}

telephoneCheck("555-555-5555");