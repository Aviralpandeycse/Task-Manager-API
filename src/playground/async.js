const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};
const demo = async (x, y) => {
  const sum = await add(x, y);
  const sum1 = await add(sum, x);
  const sum2 = await add(sum1, y);
  return sum2;
};

demo(10, 20).then((res) => console.log(res));
