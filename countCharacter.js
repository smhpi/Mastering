function countCharacter(str) {
  const charArray = str.split("");
  let count = {};

  for (let letter of charArray) {
    count[letter] = (count[letter] || 0) + 1;
  }
  return count;
}

console.log(countCharacter("test"));
