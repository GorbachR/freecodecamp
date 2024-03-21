function spinalCase(str) {

  return str.replace(/[A-Z]/g, " $&")
            .trim()
            .toLowerCase()
            .replace(/[\s-_]+/g, "-")
}

spinalCase('This Is Spinal Tap');
