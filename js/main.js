function sum(num) {
  let result = num;
  function add(operand) {
    if (operand !== undefined) {
      result += operand;
      return add;
    }
    return result;
  }

  return add;
}
let a = sum(1)(3)(5)(8);
a();
