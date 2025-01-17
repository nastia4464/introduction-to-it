const plane = (arr) => {
  const res = [];
  for (let i = 0, length = arr.length; i < length; i++) {
    let value = arr[i];
    if (Array.isArray(value)) {
      res.push(...plane(value));
    } else {
      arr[i] = res[i - 1];
      res.push(value);
    }
  }
  return res;
};

const result = plane([1, [2], [3, 4], [5], [6, [7, 8]]]);
console.log(result);
