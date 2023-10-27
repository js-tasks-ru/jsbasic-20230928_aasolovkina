function getMinMax(str) {
  // ваш код...
  let values = str.split(' ')
    .filter(function(item){
      return !isNaN(+item);
    })
    .map(function(item) {
      return +item;
    });
  let maxValue = Math.max(...values);
  let minValue = Math.min(...values);
  return {
    min: minValue,
    max: maxValue
  };
}
