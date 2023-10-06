let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  // ваш код...
  let sum = 0;

  for (key in salaries) {
    let val = salaries[key];

    if (typeof val == 'number' && isFinite(val)) {
      sum = sum + val;
    };
  };
 
  return sum;
};
