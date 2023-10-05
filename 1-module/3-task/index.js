function ucFirst(str) {
  // ваш код...
  if (!str) {
    return str;
  }
  
  let result = str[0].toUpperCase();

  if (str.length > 1) {
    result = result + str.slice(1);
  }

  return result;
}
