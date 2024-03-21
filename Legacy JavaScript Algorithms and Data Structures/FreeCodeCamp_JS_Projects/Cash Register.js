function checkCashRegister(price, cash, cid) {


  let change = cash - price;
  let amountInCid = 0;
  let amountToSubtractChange;
  let amountToSubtractRegister;
  const newArr = cid.slice().reverse();
  const changeArr = [];

  const currencyTable = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
  }

    newArr.forEach((item) => {
      
      change = Number(change.toFixed(2));

      if(change <= 0 || !item[1] || currencyTable[item[0]] > change) return;

      amountToSubtractRegister = item[1] / currencyTable[item[0]];
      amountToSubtractChange = Math.trunc(change / currencyTable[item[0]]);
      
      if(amountToSubtractChange >= amountToSubtractRegister) {
        change -= amountToSubtractRegister * currencyTable[item[0]];
        changeArr.push(item);
        } else {
        change -= amountToSubtractChange * currencyTable[item[0]];
        changeArr.push([item[0], amountToSubtractChange * currencyTable[item[0]]]);
        }

      amountInCid += item[1];
  })
 
  if(cash - price === amountInCid) return {status: "CLOSED", change: cid}

  return change ? 
  {status: "INSUFFICIENT_FUNDS", change: []} :
  {status: "OPEN", change: changeArr}

}

(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])


