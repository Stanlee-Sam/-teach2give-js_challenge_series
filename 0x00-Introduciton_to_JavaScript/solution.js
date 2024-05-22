//Sum of two numbers
function sum(num1, num2) {
  return num1 + num2;
}

//Return the next number from the number passed
function nextNumber(num) {
  return num + 1;
}

//perimeter of a rectangle
function rectanglePerimeter(length, width) {
  return 2 * (length + width);
}

//Return something to me
function returnSomethingToMe(pinocchio) {
  return "something" + " " + returnSomethingToMe();
}

//Bob's BMI vs Jane's BMI
function greaterBMI(bobBMI, janeBMI) {
  if (bobBMI > janeBMI) {
    return "Bob";
  } else if (janeBMI > bobBMI) {
    return "Jane";
  } else {
    return "Equal";
  }
}

//Basketball points
function basketballPoints(twoPoints, threePoints) {
  return twoPoints * 2 + threePoints * 3;
}

//Less than 100
function isSumMoreThan100(num1, num2) {
  if (num1 + num2 > 100) {
    return false;
  } else {
    return true;
  }
}

//Convert minutes to seconds
function convertToSeconds(minutes) {
  seconds = minutes * 60;
  if (seconds == 0) {
    return 0;
  } else if (seconds == 1) {
    return 1;
  } else {
    return seconds + "seconds";
  }
}

//Greater among the three
function greater(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    return num1;
  }
  let maxNum = Math.max(num1, num2, num3);
  return maxNum;
}

//Less among the three
function least(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    return num1;
  }
  let minNum = Math.min(num1, num2, num3);
  return minNum;
}
//Football Points

function footballPoints(wins, draws, losses) {
  return wins * 3 + draws * 1 + losses * 0;
}

//Even Numbers
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }

  for (let i = 0; i < 101; i++) {
    if (isEven(i)) {
      console.log(i);
    }
  }
}
