export default function appendToEachArrayValue(array, appendString) {
  const arrayTwo = [];
  for (const arg of array) {
    arrayTwo.push(appendString + arg);
  }

  return arrayTwo;
}
