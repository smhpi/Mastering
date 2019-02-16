function anagram(word1, word2) {
  /* 
    Mary === Army
   */

  var a = word1.toLowerCase();
  var b = word2.toLowerCase();
  a = a
    .split("")
    .sort()
    .join("");
  b = b
    .split("")
    .sort()
    .join("");
  return a === b;
}

console.log(anagram("Mary", "Army"));
