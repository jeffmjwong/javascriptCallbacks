function addOne(number, callback) {
  result = number + 1;
  setTimeout(function() {
    callback(result);
  }, 2000);
}

addOne(5, value => console.log(value));
