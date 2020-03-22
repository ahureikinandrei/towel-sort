module.exports = function towelSort (matrix) {
  if (matrix == undefined) return [];
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      arr.push(matrix[i].reverse())
    } else {
      arr.push(matrix[i])
    }
  }
  let result = arr.flat() 
  return result;
}
