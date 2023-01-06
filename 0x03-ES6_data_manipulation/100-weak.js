const weakMap = new WeakMap();
function queryAPI(endpoint) {
  const count = weakMap.get(endpoint)
    ? weakMap.set(endpoint, weakMap.get(endpoint) + 1)
    : weakMap.set(endpoint, 1);

  if (count.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
