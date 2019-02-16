// race car  === racecar
// madam

function palindrom(str) {
  var justLetter = str.toLowerCase().replace(/\s/g, "");
  var arr2 = justLetter
    .split("")
    .reverse()
    .join("");

  return justLetter === arr2;
}

console.log(palindrom("race car"));
