function isSameType(value1, value2) {
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Convert values to numbers if they are numeric strings
  if (!isNaN(value1)) {
    value1 = parseFloat(value1);
  }

  if (!isNaN(value2)) {
    value2 = parseFloat(value2);
  }

  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
