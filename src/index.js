module.exports = function reverse (n) {
  let reverseNumber = String(n).split('');

  for (let i = 0; i < reverseNumber.length; i++) {
    if (reverseNumber[i] === '-') reverseNumber.splice(i, 1);
  }

  reverseNumber = reverseNumber.reverse().join('');
  return reverseNumber;
}