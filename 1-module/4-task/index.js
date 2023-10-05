function checkSpam(str) {
  // ваш код...
  if (!str) {
    return false;
  }
   
  let lowerStr = str.toLowerCase();

  return lowerStr.indexOf('1xbet') >= 0 || lowerStr.indexOf('xxx') >= 0;  
}
