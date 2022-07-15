"use strict";

// -------------------------------------------------------------------------------------------------------
//  Challenge 1:
//  Optional:
//
//  Rekey is receiving info about applicants for his startup company (as array of objects), containing first name,
//  last name, age and technology they know.
//  Rekey only cares about the full name and the technology if the applicant has more than one year of Experience
//
//  Reformat the array of objects that you are receiving by returning a new array of objects that contains only
//  fullName and tech if the applicant has more than one year of Experience

// Input:
// let cvs = [
//     {
//         firstName: "Jason",
//         lastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         lastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         lastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         lastName: null,
//         yearsOfExperience: 7,
//         tech: "Java"
//     }
// ]
//
// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     },
//     {
//         fullName: "Shira",
//         tech: ".Net"
//     },
//     {
//         fullName: "Isabella",
//         tech: "Java"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null don`t add it to the full name

const cvFormatter = (arr) => {
  // write your code here
  let newArray=[];
  let temObj={};
  for(let i=0;i<arr.length;i++){
    switch(arr[i]["yearsOfExperience"] >1){
      case true:
        if(arr[i]["lastName"] !==null){
          temObj={fullName: arr[i]["firstName"]+" "+arr[i]["lastName"],
          tech: arr[i]["tech"]
        };
        newArray[i]=temObj;
        }else {
          temObj={fullName: arr[i]["firstName"],
          tech: arr[i]["tech"]
        };
        newArray[i]=temObj;
        }
        break;
    }
  }
return newArray;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 2:
//  Required:
// Write a function that takes two arrays of integers (nums and index) and
// returns a target array under the following rules:
// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the
// value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.

//Example 1
// Input: nums = [0, 1, 2, 3, 4], index = [0, 4, 1, 2, 3]
// Output: [0,4,1,2,3]

//Example 2
// Input: nums = [1, 2, 3, 4, 0], index = [0, 1, 2, 3, 0]
// Output: [1, 2, 3, 4, 1]

const targetArrayInGivenOrder = (numsArr, indexArr) => {
  let targetArr=[];
  // write your code here
  for(let i=0 ; i<numsArr.length && i<indexArr.length ; i++){
    let temp=indexArr[i];
   targetArr[i]=numsArr[temp];
  }
  return targetArr;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 3:
// Required:

//  Write a function that takes an array of numbers and increase the values by 10
//
//  Input:
//  [20, 54, 89, 41]
//  Output:
//  [30, 64, 99, 51]
//

const arrInc = (arr) => {
  let result = [];
  // write your code here
  for (let i=0;i<arr.length;i++){
    result[i]=arr[i]+ 10;
  }
  return result;
};
// -------------------------------------------------------------------------------------------------------

module.exports = {
  cvFormatter,
  targetArrayInGivenOrder,
  arrInc,
};
