document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello World!');

  const yuta = 2;
  const ryuto = 3;
  function add(a: number, b: number) {
    return a + b;
  }
  const result = add(yuta, ryuto);
  console.log(result);

});