
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (!matrix || matrix.length == 0) {
    return [];
  }

  let arr = [];

  matrix.forEach(function (e, i) {
    if ((i % 2) !== 0) {
      arr = arr.concat(e.reverse());
    }
    else
    arr = arr.concat(e);
  })

  return arr;
  
}
