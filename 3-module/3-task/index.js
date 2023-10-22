function camelize(str) {
  // ваш код...
  let arr = str.split('-');

  let resultParts = arr.map(function(word, index) {
    if (index == 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1)
    }
  });

  let result = resultParts.join('');

  return result;
}