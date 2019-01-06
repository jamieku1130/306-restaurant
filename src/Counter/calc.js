const calc = (counterA, counterB) => {
  const date = new Date();
  let adultNoFee = 0;
  let childNoFee = 0;
  let adultFee = 268;
  let childFee = 120;
  let adult = counterA;
  let child = counterB;
  let totalPeople = adult + child;

  while (totalPeople - 3 >= 0) {
    totalPeople = totalPeople - 3;
    if (child - childNoFee > 0) {
      childNoFee += 1;
    } else {
      adultNoFee += 1;
    }
  }
  if (date.getDay() === 6 || date.getDay() === 0 || date.getHours >= 17) {
    adultFee = 368;
    childFee = 150;
  }

  let total = Math.floor(
    ((adult - adultNoFee) * adultFee + (child - childNoFee) * childFee) * 1.1
  );
  if (adult - adultNoFee + (child - childNoFee) >= 10) {
    total = Math.floor(total * 0.95);
  }

  return { adult, child, adultNoFee, childNoFee, adultFee, childFee, total };
};

export default calc;
