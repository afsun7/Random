function random() {
  let temp = [];
  let array = [];
  var k = 0;

  for (i = 0; i < 10; i++) {
    let element = Math.floor(Math.random() * 10);
    if (!temp.includes(element)) temp.push(element);
    else i--;
  }
  for (var i = 0; i < 4; i++) {
    array[i] = [];
    for (var j = 0; j < 3; j++) {
      if (i === 3 && j === 2) {
        array[i][j] = "#";
        continue;
      }
      if (i === 3 && j === 0) {
        array[i][j] = "+";
        continue;
      }
      array[i][j] = temp[k++];
    }
  }
  return array;
}
console.log(random());
