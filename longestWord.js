function longestWord(sen) {
  var array1 = sen.match(/\w[a-z]{0,}/gi);

  var result = array1[0];
  for (var i = 1; i < array1.length; i++) {
    if (result.length < array1[i].length) {
      result = array1[i];
    }
  }
  return "longest word in the sentence is " + result;
}
console.log(longestWord("here is test Javascript"));
