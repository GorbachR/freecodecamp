function destroyer(arr) {

  const parArr = arr.slice();
  const argumentsArr = [].slice.call(arguments, 1);

  argumentsArr.forEach((item) => {

    while(parArr.indexOf(item) !== -1)
    parArr.splice(parArr.indexOf(item), 1)
  });

  return parArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);