// /* Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false. */

// hasOddNumber([1,2,2,2,2,2,4]) // true
// hasOddNumber([2,2,2,2,2,4]) // false

// function hasOddNumber(array){
//     return array.some(function(val){
//         return val % 2 !== 0;
//     });
// };








// /* Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false */

// hasAZero(33321232131012) // true
// hasAZero(1212121) // false

// function hasAZero(num){
//     return num.toString().split('').some(function(val){
//       return val === '0';
//     });
//   };








// /* Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. */

// hasOnlyOddNumbers([1,3,5,7]) // true
// hasOnlyOddNumbers([1,2,3,5,7]) // false

// function hasOnlyOddNumbers(arr){
//     return arr.every(function(val){
//       return val % 2 !== 0;
//     });
//   };
  








// /* Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false. */

// hasNoDuplicates([1,2,3,1]) // false
// hasNoDuplicates([1,2,3]) // true

// function hasNoDuplicates(arr){
//     return arr.every(function(val){
//       return arr.indexOf(val) === arr.lastIndexOf(val);
//     });
//   };
  








// /* Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false. */

// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//   hasCertainKey(arr,'first') // true
//   hasCertainKey(arr,'isCatOwner') // false

//   function hasCertainKey(arr, key){
//     return arr.every(function(val){
//       return key in val
//     });
//   };








// /* Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false. */

// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//   hasCertainValue(arr,'title','Instructor') // true
//   hasCertainValue(arr,'first','Elie') // false

//   function hasCertainValue(arr, key, searchValue){
//     return arr.every(function(val){
//       return val[key] === searchValue;
//     });
//   };
  





// const scores = [0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93];
/* find a score that is greater than 75 using ".find", it will return the first score greater than 75 only. */

// scores.find(function(score){
//   return score > 75
// });
// console.log(scores.find(function(score){
//   return score > 75
// }));


/* find the first even score in this array using ".find" */

// scores.find(function(score){
//   return score !==0 && score % 2 === 0;
// });
// console.log(scores.find(function(score){
//   return score !== 0 && score % 2 === 0;
// }));


/* find all even scores using "scores.filter" */

// const evenScores = scores.filter(function(score){
//   return score !== 0 && score % 2 === 0;
// });
// console.log(evenScores);


/* find the index of the first even number that is not 0 using "findIndex method" */

// const firstEven = scores.findIndex(function(score){
//   return score !== 0 && score % 2 === 0;
// });
// console.log(firstEven);
// console.log(scores[16]);


/* write a function called "myFind" that takes in an array & a callback. */

// function myFind(array,callback){
//   for(let i = 0; i < array.length; i++){
//     if(callback(array[i], i, array) === true) return array[i];
//   }
// }

// myFind(scores, function(score){
//   return score > 91;
// });

// console.log(myFind(scores, function(score){
//   return score > 91;
// }));


// const students = [
//   { name: 'Drake', gpa: 4.6 },
//   { name: 'Henrietta', gpa: 4.4 },
//   { name: 'Tung', gpa: 4.0 },
//   { name: 'Harry', gpa: 3.8 },
//   { name: 'Ant', gpa: 3.2 },
// ];

// const [first, ...losers] = students;
// console.log(losers);


// 'nofilter', 'just saying', 'winning', 'yolo';

// const bannedHashTags = new Set(['nofilter', 'just saying', 'winning', 'yolo']);
// bannedHashTags.add('bestlife').add('selfie');

// console.log(bannedHashTags);

// function filterHashTags(tags){
//     const bannedHashTags = new Set(['nofilter', 'just saying', 'winning', 'yolo']);
//     bannedHashTags.add('bestlife').add('selfie');
//     return tags.filter((tag) => !bannedHashTags.has(tag));
// }

// const susansTags = ['happy monday', 'yolo', 'winning', 'sunset' ];

// console.log(filterHashTags(susansTags));




// const color = 'teal';

// const obj = {};
// obj.color = '#3723ff';
// console.log(obj);



// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// grandparent.addEventListener("click", e => {
//     console.log(grandparent)
// })

// parent.addEventListener("click", e => {
//     console.log(parent)
// })

// child.addEventListener("click", e => {
//     console.log(child)
// })

// let rating = 2;  

/* an (if statement) runs if the condition is true */
// if(rating === 3){
//     console.log("you are a superstar!");
// }

// /* (else if statement only applies if rating = 2. if rating = 3, the (if statement) applies. */
// else if(rating === 2){
//     console.log('meets expectations');
// }
 
// /* (else statement) runs if the (if and else if statement) did not run anything */
// else{
//     console.log('invalid rating');
// }


// let num = 38;

// if(num % 2 !== 0){
//     console.log("odd number!")
// }


/* Hour
If it is between 6am and 12pm: Good morning!
If it is between 12pm and 6pm: Good afternoon!
otherwise Good evening! */

// let hour = 18

// if(hour >= 6 && hour < 12){
//     console.log('Good morning!');
// }else if(hour >= 12 && hour < 18){
//     console.log('Good afternoon!');
// }else{
//      console.log('Good evening!');
//  }

function printGreeting(hour){
    if(hour >= 6 && hour < 12){
        console.log('Good morning!');
    }else if(hour >= 12 && hour < 18){
        console.log('Good afternoon!');

    }else if(hour >= 18 && hour < 24) {
         console.log('Good evening!');
    }else{
        console.log('incorrect time!');
    }
    return undefined
}
printGreeting(28);


/* A for loop = repeat some code a LIMITED amount of times. */

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }