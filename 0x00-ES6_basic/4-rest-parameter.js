export default function returnHowManyArguments(...args) {
  let count = 0;
  /* eslint-disable no-unused-vars */
  for (const arg of args) {
    count += 1;
  }
  /* eslint-disable no-unused-vars */
  return count;
}
