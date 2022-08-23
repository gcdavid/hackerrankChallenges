//PALINDROME
// const palindrome = (str) => {
//   str = str.toLowerCase();
//   return str === str.split("").reverse().join("");
// };

/*
const fizzBuzz = (number) => {
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
    };
    
    console.log(fizzBuzz(15));
*/

//closure
// function counter() {
//   var counter = 0;
//   return {
//     add: function (number) {
//       counter += number;
//     },
//     retrieve: function () {
//       return "The counter is currently at " + counter;
//     },
//   };
// }

// var c = counter();
// c.add(5);
// c.add(6);
// console.log(c.retrieve());

// function pigIt(str) {
//   var arrayWord = str.split(" ");
//   return arrayWord
//     .map(function (word) {
//       var firstLetter = word.charAt(0);
//       return word.slice(1) + firstLetter + "ay";
//     })
//     .join(" ");
// }

// function pigIt(str) {
//   var arrayWord = str.split(" ");
//   return arrayWord
//     .map(function (word) {
//       var firstLetter = word.charAt(0);
//       return word.slice(1) + firstLetter + "ay";
//     })
//     .join(" ");
// }

// console.log(pigIt("Hello!"));

// function recursion(number) {
//   if (number === 0) return 1;
//   else return number * recursion(number - 1);
// }

// console.log(recursion(5));

// function minValue(arr) {
//   const result = arr.reduce(
//     (acc, curr) => {
//       if (curr > 0) {
//         acc.greater.push(curr);
//       }
//       if (curr < 0) {
//         acc.less.push(curr);
//       }
//       if (curr === 0) {
//         acc.zero.push(curr);
//       }
//       return acc;
//     },
//     { less: [], greater: [], zero: [] }
//   );

//   const finalResult = {
//     lesserValues: (result.greater.length / arr.length).toFixed(6),
//     greaterValues: (result.less.length / arr.length).toFixed(6),
//     zeroValues: (result.zero.length / arr.length).toFixed(6),
//   };
//   return Object.values(finalResult).join("\n");
// }

// console.log(minValue([-4, 3, -9, 0, 4, 1]));

// function miniMaxSum(arr) {
//   var maxValue = arr[0];
//   var minValue = arr[0];
//   var sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (maxValue < arr[i]) {
//       maxValue = arr[i];
//     }
//     if (minValue > arr[i]) {
//       minValue = arr[i];
//     }
//     sum += arr[i];
//   }
//   console.log(`${sum - maxValue} ${sum - minValue}`);
// }

// miniMaxSum([7, 69, 2, 221, 8974]);

// function timeConversion(s) {
//   // var timeArr = s.split(":");
//   // var hoursArr = timeArr[0];
//   // var minsArr = timeArr[1];
//   // var secondsArr = timeArr[2].slice(0, -2);

//   // let timeFormat = s.slice(-2);
//   // switch (timeFormat) {
//   //   case "AM":
//   //     if (timeFormat && +hoursArr === 12) {
//   //       hoursArr = "00";
//   //     }
//   //     break;
//   //   case "PM":
//   //     if (timeFormat && +hoursArr != 12) {
//   //       hoursArr = +hoursArr + 12;
//   //     }
//   //     break;
//   //   case "default":
//   //     return timeFormat;
//   // }
//   // return hoursArr + ":" + minsArr + ":" + secondsArr;

//   var hours = s.split(":")[0];
//   var minutes = s.split(":")[1];
//   var seconds = s.split(":")[2].slice(0, 2);
//   var timeFormat = s.split(":")[2].slice(-2);
//   console.log(hours);
//   if (timeFormat === "PM" && +hours != 12) {
//     hours = +hours + 12;
//   } else if (timeFormat === "AM" && +hours === 12) {
//     hours = "00";
//   }
//   console.log(hours + ":" + minutes + ":" + seconds);
// }

// timeConversion("07:05:45AM");

// var a = 04;
// var b = 05;
// console.log(
//   (a + b).toLocaleString("en-US", {
//     minimumIntegerDigits: 2,
//   })
// );

// function lonelyinteger(a) {
//   let count = {};
//   if (a.length === 1) return 1;
//   for (let i = 0; i < a.length; i++) {
//     let valueAtIndex = a[i];
//     if (count[valueAtIndex] === undefined) {
//       count[valueAtIndex] = 1;
//     } else count[valueAtIndex]++;
//   }
//   return Object.entries(count).sort((a, b) => a[1] - b[1])[0][0];
// }

// console.log(lonelyinteger([0, 0, 1, 2, 1]));

// const diagonalDifference = (arr) => {
//   let diagonalLeft = 0;
//   for(let row = 0; row < arr[0].length; row++) {
//       for(let column = 0; column < arr[0].length; column++) {
//           if(column === row) {
//               diagonalLeft +=arr[row][column];
//           }
//       }
//   }
//   // console.log(diagonalLeft);

//   let diagonalRight = 0;
//   for(let row = 0; row < arr[0].length; row++) {
//       for(let column = arr[0].length - 1; column >= 0; column--) {
//           if(row + column === arr[0].length - 1) {
//               diagonalRight +=arr[row][column];
//           }
//       }
//   }
//   // console.log(diagonalRight);

//   const findDifference = Math.abs(diagonalLeft - diagonalRight);
//   return findDifference;
// }

//////////////////////////////////////////////////////////////////////
// function diagonalDifference(arr) {
//   // Write your code here
//   var leftTo = 0;
//   var rightTo = 0;
//   for (let i = 0; i < arr.length; i++) {
//     leftTo += arr[i][i];
//   }
//   console.log(leftTo);
//   var x = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     rightTo += arr[x][i];
//     x++;

//   }

//   return Math.abs(leftTo - rightTo);
// }

// console.log(
//   diagonalDifference([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
//   ])
// );

function sort(arr) {
  let counts = Array(arr.length - 1).fill(0);
  arr.forEach((item) => {
    ++counts[item];
  });
  return counts;
}

sort([1, 1, 3, 2, 1]);
console.log(sort([1, 1, 3, 2, 1]));
// function lonelyinteger(a) {
//   let count = {};
//   if (a.length === 1) return 1;
//   for (let i = 0; i < a.length; i++) {
//     let valueAtIndex = a[i];
//     if (count[valueAtIndex] === undefined) {
//       count[valueAtIndex] = 1;
//     } else count[valueAtIndex]++;
//   }
//   return Object.entries(count).sort((a, b) => a[1] - b[1])[0][0];
// }
