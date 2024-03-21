function convertHTML(str) {

    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }
  
  Object.entries(htmlEntities).forEach((item) => {
      str = str.replace(new RegExp(`${item[0]}`, 'g'), `${item[1]}`);
  })
    console.log(str)
    return str;
  }
  
  convertHTML("Dolce & Gabbana");
  