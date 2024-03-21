function convertToRoman(num) {

  let romanNumStr = "";
  let indexToStart = 0;
  const table = [
    {"M": 1000}, {"CM": 900}, {"D": 500}, {"CD": 400},
    {"C": 100}, {"XC": 90}, {"L": 50}, {"XL": 40},
    {"X": 10}, {"IX": 9}, {"V": 5}, {"IV": 4},
    {"I": 1}
  ]

  while(num) {
    
    for(let i = indexToStart; i < table.length; i++) {
      const arr = Object.entries(table[i])[0];
      
      if(arr[1] <= num) {
        romanNumStr = romanNumStr.concat(arr[0]);
        num -= arr[1];
        break;
      } else {indexToStart++}
    }
  }
 return romanNumStr;
}

convertToRoman(36);