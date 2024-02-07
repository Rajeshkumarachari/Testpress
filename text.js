//1st:Write a program to print the reverse of the given string.

function reverse(str) {
  let lowerCase = str.toLowerCase();
  if (str === lowerCase) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    console.log(newStr);
  }
  return null;
}
reverse("codecode");

//2nd :Given a number, check whether it is a prime number or not.

function prime(num) {
  let isPrime = true;
  if (num === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }

    isPrime ? console.log("Yes") : console.log("no");
  }
}
prime(3);
prime(4);

//3rd

//4th:Given a number N, print reverse of number N.
function reverseNumber(number) {
  let reverse = 0;
  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reverse;
}

console.log(reverseNumber(500));
console.log(reverseNumber(988));

//5 th: Given an array of numbers, find the maximum and minimum element in the array.
function findMaxAndMin(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max, min };
}

console.log(findMaxAndMin([54, 546, 548, 60]));
