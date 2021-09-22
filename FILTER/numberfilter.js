const numbers = [1, 234, 33, 8, 9, 14, 23, 51, 34, 72];

const filterNumbers = (number) => {
  if (number > 30) {
    return true;
  }
};

const filteredNumbers = numbers.filter(filterNumbers);
//console.log('original: ' + numbers);
//console.log('filtered: ' + filteredNumbers);
