export default function hasValuesFromArray(set, array) {
  for (const ele of array) {
    if (set.has(ele) === false) return false;
  }
  return true;
}
