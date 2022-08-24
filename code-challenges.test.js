// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// QUESTION 1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
describe("fibSequence", () => {
    it("takes in a number greater than 2, and returns an array of that length containing the numbers of the fibbonaci sequence", () => {
        expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// b) Create the function that makes the test pass.

// create function that takes a number greater than 2
// create result array with 0 and 1 - starting numbers for fibonacci sequence
// iterate until i <= num, i starting on 2 due to 2 items already being in array
    // on each iteration, push into result array the last number added with the number before the last
// use slice method to remove 0 from result array, giving the array the correct length and number sequence


const fibSequence = (num) => {
    let result = [0, 1]

    if (num > 2) {
    for (let i = 2; i <= num; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
}
    let finalResult = result.slice(1)
    return finalResult
}

// b) Create the function that makes the test pass.

// create function that takes a number greater than 2
// create result array with 0 and 1 - starting numbers for fibonacci sequence
// iterate until i <= num, i starting on 2 due to 2 items already being in array
    // on each iteration, push into result array the last number added with the number before the last
// use slice method to remove 0 from result array, giving the array the correct length and number sequence


const fibSequence = (num) => {
    let result = [0, 1]

    if (num > 2) {
    for (let i = 2; i <= num; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
}
    let finalResult = result.slice(1)
    return finalResult
}
//PSUEDO CODING
// create a functionn that takes in a number > 2 (greater than 2)
// Output: Returns an array the same length while addinig(.push) to push the new number into the empty array. Then add (+) the previous number to each to get the fibinochi sequence
// Create variables to allow the fibinochi sequence to be pushed onto a new array
// Expected output: [1, 1, 2, 3, 5, 8]
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


  const fibLength1 = 6
//  Expected output: [1, 1, 2, 3, 5, 8]

 const fibLength2 = 10
//  Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// a) Create a test with expect statements for each of the variables provided.

// FAIL  ./code-challenges.test.js
// fibinochi
//   ✕ returns an array that length containing the numbers of the Fibonacci sequence using a number > than 2 (4 ms)

// ● fibinochi › returns an array that length containing the numbers of the Fibonacci sequence using a number > than 2

//   expect(received).toEqual(expected) // deep equality

//   Expected: [1, 1, 2, 3, 5, 8]
//   Received: undefined

describe("fibinochi", () => {
    it("returns an array that length containing the numbers of the Fibonacci sequence using a number > than 2", () => {
      expect(fibinochi(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
     expect(fibinochi(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });
  })




// b) Create the function that makes the test pass.

// ONLY WAS ABLE TO GET ON TEST TO PASS. SPENT THE WHOL WEEKEND ON JUST THIS


let fibinochi= () => {}
    const newArray = [0, 1];
    for(var i = 2; i < newArray; i++) {
       const a = (i - 1);
       const b = (i - 1);
       newArray.push(a + b);
    }




// QUESTION 2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

//PSUEDO CODING
// create a functionn that takes in a an array
// Output: new array of only odd numbers sorted from least to greatest.
// Use the .filter method the filter through the array ang grab all of the odd numbers. Create a another variable for the new array, .sort through that array to get the number from leats to greatest
// Expected output: -9, 7, 9, 199]
// Expected output: 7,23, 67,-823]


const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7,23, 67,-823]


// 1a) Create a test with expect statements for each of the variables provided.

// FAIL  ./code-challenges.test.js
// theOddNumbers
//   ✕ returns a new array of only odd numbers sorted from least to greatest. (1 ms)

// ● theOddNumbers › returns a new array of only odd numbers sorted from least to greatest.

//   ReferenceError: theOddNumbers is not defined

describe("theOdds", () => {
    it("returns a new array of only odd numbers sorted from least to greatest.", () => {
      expect(theOdds(fullArr1)).toEqual([-9, 7, 9, 199]);
      expect(theOdds(fullArr2)).toEqual([7,23, 67,-823]);
    });
  })

// 2b) Create the function that makes the test pass.

// TRY One  🤷🏾‍♀️
const onlyNumbers = fullArr1.filter(
    element => typeof element === "number"
);

const odds = onlyNumbers.filter(number => {
    return number % 2 !== 0;
});

const sorted= odds.sort



// Question 3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


const numbersToAdd1 = [2, 4, 45, 9]
// // Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// // Expected output: []

//PSUEDO CODE
// create a functionn that takes in a an array
// Input: numbersToAdd1,2,3, which are the original arrays given to us
// Output: pushing numbers to a  array with the accumulation sum of the original array



// a1) Create a test with expect statements for each of the variables provided.

// FAIL  ./code-challenges.test.js
//   sumOfArray1
//     ✕ returns an array of the accumulating sum (7 ms)


describe("sumOfArray1", () => {
    it("returns an array of the accumulating sum", () => {
      expect(sumOfArray1(numbersToAdd1)).toEqual([2, 6, 51, 60]);
      expect(sumOfArray1(numbersToAdd2)).toEqual([0, 7, -1, 11]);
      expect(sumOfArray1(numbersToAdd3)).toEqual([]);
    });
  })




// b2) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// sumOfArray1
//   ✓ returns an array of the accumulating sum (3 ms)


const sumOfArray1= arr => {
   const accSum = arr.reduce((acc, val) => {
      let { sum, res } = acc;
      sum += val;
      res.push(sum);
      return { sum, res };
   }, {
      sum: 0,
      res: []
   });
   return accSum.res;
};
