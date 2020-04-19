// expected return value
const output = [];

const myProgram = integer => {
  for (let i =1; i <= integer; i++) {
    if (i % 2 == 0) {
      if (i % 3 == 0) {
        if (i % 5 == 0) {
          output.push('yu-gi-oh');
        } else output.push('yu-gi');
      } else if (i % 5 == 0) {
        output.push('yu-oh');
      } else output.push('yu');
    } else if (i % 3 == 0) {
        if (i % 5== 0) {
            output.push('gi-oh');
        } else output.push('gi');
    } else if (i % 5 == 0) {
      output.push('oh');
    } else output.push(i);
  }
  return output;
}
// use the function
console.log(myProgram(100));
console.log(myProgram(30));
