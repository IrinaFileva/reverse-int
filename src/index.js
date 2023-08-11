module.exports = function reverse (n) {
  const num = Math.abs(n)
  const str = num.toString();
  return str.split('').reverse().join('');

}
