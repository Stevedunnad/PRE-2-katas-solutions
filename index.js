function getEvenNumbers(nums) {
  /*
    This function takes an array of integers and returns an array containing only even integers
  */
 /*
  Filter even numbers with modulo of 0
 */
//Previous submission:
  // const evens = nums.filter((num) => {
  // return num % 2 === 0;
  // });
  // return evens;
   /*
Previous function was refactored  
- no variable needed
- returned early as the value did not need to be stored
*/
  return nums.filter(num => num % 2 === 0);
}
 
function flipBooleans(bools) {
  /*
    This function takes an array of booleans and should return an array of the opposite booleans.
    E.g. [true, true, false] => [false, false, true]
  */
 /*
    Make empty array
    Iterate array with for loop and push opposite boolean values using ! (not operator) 
 */
//Previous submission:
//  const opposite = [];
//   for (let i = 0; i < bools.length; i++) {
//     opposite.push(!bools[i]);
//   }
//   return opposite;
//   console.log(opposite);

// const opposite = bools.map(bool => bool = !bool)
//   return opposite;
/*
  I refactored the function to use map and because map creates a new array I returned it 
  straight away
 */
return bools.map(bool => bool = !bool)
}
 
function translateKey(student, keyToChange, translation) {
  /*
    Northcoders is expanding to France 🎉🥖. 
    Unfortunately, our team on the ground in Paris doesn't speak the best English and has been providing us with student data partly in French. 
    This function will take an object representing a student's data, a key that needs changing, and its English translation.  
    E.g. 
    const student = {
      prénom: 'Carla',
      surname: 'Bruni',
      job: 'Artist'
    }
    const keyToChange = 'prénom'
    const translation = 'firstName'
 
    It returns a **new object** with the key successfully translated into English.
    E.g. 
    {
      firstName: 'Carla',
      surname: 'Bruni,
      job: 'Artist'
    }
  */
 /*
    first make empty object / delete existing key and replace with new object / 
    reassign tp and return new object:
 */
const newStudent = {};
delete Object.assign(student, {[translation]: student[keyToChange] })[keyToChange];
return Object.assign(newStudent, student);
}
 
function findFirstDentist(people) {
  /*
    This function takes an array of people objects and returns the first found dentist object from the array.
  */
 /*
  find method used to return first match for person in object with isDentist === true value
  otherwise null value is returned:
 */
//Previous submission:
  // let dentist = people.find((person) => {
  // if (person.isDentist === true) {
  // return person
  // }
  // });
  // if (dentist === undefined) {
  // return null;
  // }
  // return dentist;

  //Refactored:
  const dentist = people.find(person => person.isDentist)
    if (dentist === undefined) {
      return null;
      }
      return dentist;
  }
 
function tallyPeopleInManchester(people) {
  /* This function receives an array of people objects in for format:
    [
      { name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    ]
 
    The function should return the number of people who live in the city of Manchester
  */

 /*
  Filter people in object who match lives.city - use dot notation to drill down in object:
 */
    //Original submission - contains un-used variable
//   let mancs = 0;
//   const mancResidents = people.filter(person => {
//   if (person.lives.city === "Manchester") {
//   mancs++;
//   }
//   }); 
//   return mancs;
// }

let mancs = 0;
people.filter(person => {
if (person.lives.city === "Manchester") {
mancs++;
}
}); 
return mancs;
}
 
function getPugOwners(dogs) {
  /*
    This function takes an array of dog objects and returns an array of the names of all the pug owners.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      {name: 'Max', breed: 'Pug', owner: 'Izzi'},
      {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
    ]
    will return ['Izzi', 'Anat']
  */
/*
  make empty array
  forEach dog in object, push dog owners with pug breed
 */
    //Original submission:
//  const pugOwners = [];
//   const dogOwners = dogs.forEach(dog => {
//   if (dog.breed === 'Pug') {
//   pugOwners.push(dog.owner)
//   }
//   });
//   return pugOwners;
// }
  //Refactored:

  const pugOwners = [];
  dogs.map(dog => {
  if (dog.breed === 'Pug') {
  pugOwners.push(dog.owner)
  }
  });
  return pugOwners;
  }
 
function pluraliseKeys(obj) {
  /*
    In this function you will be provided with an object. That object is storing information on keys. 
    E.g. {
      name: 'Tom',
      job: ['writing katas', 'marking'],
      favouriteShop: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    };
 
    In some cases, however, the keys have been very badly named. Good naming convention tells us that the keys containing arrays should be named as plurals. 
    This function should return a **new object** that is a copy of the input but with any keys that contain arrays pluralised (an 's' added to the end.)
  
    
    E.g. {
      name: 'Tom',
      jobs: ['writing katas', 'marking'],
      favouriteShops: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    }
  */

  /*
    make new empty object / use for in loop to check keys / 
    variable for pluralised version placed inside loop / 
    if statement checks to find values which are arrays
    then the keys of those array values are assigned with the 
    new pluralised version of key / all is reassigned to new object
    and new object is returned
 */
const newObj = {};
	for (let key in obj) {
	const newKey = `${[key]}s`;
	if (Array.isArray(obj[key])) {
	delete Object.assign(obj, {[newKey]: obj[key] })[key];
  };
  };
	return Object.assign(newObj, obj);
};
 
function getWordLengths(str) {
  /*
    This function takes a string and returns an array of the lengths of each word in the string.
    E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
 /*
  use split to split string into words in array
  make empty array
  for loop iterates new array of words
  if words are longer than 0, push length of those words to empty array
 */

 /*
    split sentence string into array / make empty array for word length integers / 
    loop through array of words with forEach / if word length is longer than 0 (all words!)
    push to empty array
 */
    //Original submission:
//   const splitWords = str.split(' '),
//   wordNums = [],
//   wordLengths = splitWords.forEach(word => {
//   if (word.length > 0) {
//   wordNums.push(word.length);
//   }
//   });
//   return wordNums;
// }
    // refactored - without unused variable:
const splitWords = str.split(' '),
wordNums = [];
splitWords.forEach(word => {
if (word.length > 0) {
wordNums.push(word.length);
}
});
return wordNums;
}
 
function getPalindromes(words) {
  /*
    This function takes an array of words and returns an array containing only the palindromes.
    A palindrome is a word that is spelled the same way backwards.
    E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
  */
 /*
  function 'reverse' creates array of reversed words
  for loop iterates array and compares reversed words with normal words from array
  if there is a match, they are palindromes and are pushed to empty array/returned
 */
    //Original submission:
// 	reverse = (s) => {
//     return s.split("").reverse().join("");
//  }  
// 	let result=[];
//   	for(let i = 0; i < words.length; i++){
//     if (words[i] === reverse(words[i])) {
//     result.push(words[i]);
//  };
//  }
//   	return result;
// }
    //refactored:
  return words.filter(word => word.split('').reverse().join('') === word)
}
 
function replaceLettersWithXs(str) {
  /* 
    This function will receive a string with a mix of characters. It should return the string with all letters replaced by dashes ('X').
    For example 'I love Greg' should return 'X XXXX XXXX', and 'Hard as 1, 2, 3' should return 'XXXX XX 1, 2, 3'.
  */
 /* 
    make regex variable for letters (a-z, ignore case/global search)
    make separate regex variable for white space
    make empty string variable
    split string from argument into single letters
    loop through letters using map method and use ternary operator to match letters, white spaces (return numbers from array unchanged)

  */
    //Original submission:
//   let xLetters = '';
//   const 
//     isLetters = /[a-z]/ig,
//     isWhiteSpace = /\s/g,
//     splitStr = str.split(''),
//     xWords = splitStr.map(letter => {
//     letter.match(isLetters) ? xLetters += 'X' : letter.match(isWhiteSpace) ? xLetters += ' ' : xLetters+= letter;
// });  
//   return xLetters;
// }
    //Refactored 1:
    //   const 
    //     letters = /[a-z]/ig,
    //     whiteSpaces = /\s/g,
    //   nonLetter = /[~-]/g;
    //     splitStr = str.split('');
    //     const newStr = splitStr.map(letter => letter.replace(letters, 'X') && letter.replace(whiteSpaces, ' ') && letter.replace(nonLetter, ' '));  
    //   return newStr;
    // }
    //Refactoed 2:

    const splitStr = str.toUpperCase().split('');   

    const xArr = splitStr.map(letter => {
    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
    return 'X';
    } else if (letter.charCodeAt() === 32) {
    return ' ';
    } else {
    return letter;
    }
    });
    return xArr.join('');
}

  // replaceLettersWithXs('I love Ming x 1000');

function validMobileNumber(num) {
  /*
    This function will receive the string of a mobile number. It should return true if the number is a valid UK number and false if not.
    A valid mobile number may begin with '07' followed by 9 more digits.
    It may also begin with '+447' followed by 9 more digits.
    It may also begin with '00447' followed by 9 more digits.
    Anything else is invalid.
  */
 /*
    regex searches for numbers that begin with 00447/07/+447 and end with optional 
    digits and white spaces (up to 9 charachters) / ternary operator returns true or false
 */
 const mobNum = num;  
 const valMobNum = /^(00447|07|\+447)(?:\d\s?){9}$/;
 return mobNum.match(valMobNum) ? true : false;
}

function sumDigitsFromString(str) {
  /*
    This function takes a string with a jumble of letters and numbers. It should add together all the numbers that appear in the string and return the total.
    E.g. 'foo5bar6cat1' => 12
    'foo99cat' => 18
    Tip: For this one, it might be useful to know that the value `NaN` in JavaScript behaves oddly. For example, if you do `typeof NaN` it tells you it's a `"number"`. Odd, eh?
  */
 /*
    make regex for any digit / perform a regex match on array / array of numbers (as strings)
    is mapped to new array as numbers 
    then array of numbers are reduced to single number
 */
 const regex = /\d/g, 
 newArr = str.match(regex), 
 sumDigits = newArr.map((item) => {
 return Number(item)
});

 const finalNum = sumDigits.reduce((acc, curr) => {
   return acc + curr;

});
 return finalNum;
}

function getWilliams(arr) {
  /*
    This function takes an array of full names and returns an array containing only the people whose last name is Williams.
    E.g. ['Charlotte Jones', 'Rebecca Williams', 'Harry Williams', 'John Williamson', 'William Jones'] => ['Rebecca Williams', 'Harry Williams']
  */
 /*
    regex for string ending with Williams / use spread operator to clone array and filter
    with regex
 */
//  const williams = /Williams$/;
// 	return [...arr].filter(wills => {
//     if (wills.match(williams)) {
//     return wills
// } 
// });
// };

const williams = /Williams$/;
	return [...arr].filter(wills => {
    if (wills.match(williams)) {
    return wills
} 
});
};

function getFactorials(nums) {
  /*
    This function takes an array of positive integers and returns an array of the factorials of these numbers.
    E.g. [4, 3, 2] => [24, 6, 2]

    The factorial of a number is the product of that number and all the integers below it.
    E.g. the factorial of 4 is 4 * 3 * 2 * 1 = 24
  */
 /*
    separate recursive function will factorise individual numbers
    for loop applies recursive function to each number iterated in array
    and pushes results to empty array/returns
 */
 function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

let arr = [];
  for(let i = 0; i < nums.length; i++) {
     arr.push(factorial(nums[i]));
  }
  return arr;
}
getFactorials([1,2,3,4,5]);

function largestNumber(num) {
  /*
    This function takes a number and returns the largest number that can be made with the same digits.
    E.g. if num is 23, the function should return 32.
    E.g. if num is 9, the function should return 9.
    E.g. if num is 581 the function should return 851.
  */
 /*
    provided number is changed to a string and split into individual characters - 
    this is necessary for the sort function to work as it sorts alphabetically / 
    array of numbers (as strings) is sorted with sort method and compare (callback
    function) - largest to smallest
    sorted number (strings) are mapped to empty string / string is returned as number
    using parseInt()
 */
  let newTotal = '';
  const numArr = num
  .toString()
	// .replace(/\D/g, '0')
	.split('');
	
	const sortedNums = numArr.sort((a, b) => {
  	return b - a;
});
	
	sortedNums.map(sortNum => {
		newTotal += sortNum;
  });
	return parseInt(newTotal, 10);
}

function generateMatrix(n) {
  /*
    This function takes a number, n, and returns an n*n nested array populated with the value null.
    E.g. if n is 3, we want:
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  */
 /*
    array of empty arrays form basic structure of matrix / for loop and nested for loop
    populate array with rows and columns to form matrix / row * col is replaced with null
  */
    //Original submission:
// 	let matx = [];
// 	for (let i = 0; i < n; i++) {
// 	matx[i] = [];
// };

// for (let row = 0; row < n; row++ ) {
// 	for (let col = 0; col < n; col++) {
// 	matx[row][col] = null;
// };
// };
// return matx;
// }

return Array(n)
	.fill()
	.map(() => {
	return Array(n)
	.fill(null)});
}

  function findWrongWayFruit(orchard) {
  /*
    This array takes an array of fruit in the format:
    ['apple', 'apple', 'apple', 'apple', 'elppa', 'apple']

    The fruit will all be the 'right way round' apart from 1 fruit!
    Your function should return its index position. E.g. in this example, 4.
    NB The fruit will not always be apple but it will always be an orchard of the same kind of fruit.
  */
 /*
    make two empty string variables / if statement returns 0 if word lengths less than 3 / 
    for loop iterates source array and compares strings - if they don't match first string
    from array, they are pushed to second array instead - index number of each string is also
    pushed to array just before each item
    The two arrays are compared by length - the shortest is the reversed word - the index value
    in front of the string is returned
  */

//  findWrongWayFruit: Consider using a sort, and then comparing the first two items against each other. 
//  If they're different return the first item, else return the last item.

//  let newStr = '', newStr2 = '';

// 	if (orchard.length < 3) {
// 		return 0;
// };

// for (let i = 0; i < orchard.length; i++) {
// 	if( orchard[i] === orchard[0] ) {
// 	newStr+= [i], orchard[i];
// }   else {
// 	newStr2+= [i], orchard[i];
// }
// };
// 	return newStr.length < newStr2.length ? parseInt(newStr[0]) : parseInt(newStr2[0]);
// };

    //Refactored version:

	if (orchard.length < 3) {
		return 0;
  };
  const newArr = orchard.slice().sort();
    console.log(newArr)
    if (newArr[0] !== newArr[1]) {
      return orchard.indexOf(newArr[0]);
    } else {
      return orchard.indexOf(newArr[newArr.length -1]);
    };
  }

function pairDNA(dna) {
  /*
    This function takes a string of DNA such as 'GTCA' and returns an array containing correctly matched DNA pairs.
    E.g. 'GTTC' => ['GC', 'TA', 'TA', 'CG']
    If any nonsensical letters are passed as DNA they should be ignored.
    E.g. 'GYTC' => ['GC', 'TA', 'CG']
  */
 /*
    source string is converted to upper case / for loop iterates through string, with if/else
    logic and pushes correct DNA pairs
  */
 const dnaUpper = dna.toUpperCase();
	const dnaPairs = [];
	for (let i = 0; i < dnaUpper.length; i++) {
	if (dnaUpper[i] === 'A') {
	dnaPairs.push('AT');
}   else if (dnaUpper[i] === 'T') {
	dnaPairs.push('TA');
}	else if (dnaUpper[i] === 'C') {
	dnaPairs.push('CG');
}	else if (dnaUpper[i] === 'G') {
	dnaPairs.push('GC');
}	else {
  delete dnaUpper[i];
};
};
return dnaPairs;
}

function tallyHashtagsAndMentions(str) {
  /* 
    This function receives a string that will contain a number of mentions and hashtags as on Twitter.

    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"

    The function should return an object describing the number of hashtags and mentions found:
    { hashtags: 2, mentions: 1 }
  */
 /*
    Object with hashtags and mentions set to 0 value / regex variables for # and @ / 
    for loop adds matching characters to object
  */
  //Original submission:
//   const social = {
//     hashtags: 0,
//     mentions: 0
//    }

//   const regexHash = /#/g;
//   const regexMention = /@/g;

//   for(let i = 0; i < str.length; i++) {
//   if (str[i].match(regexHash)) {
//   social.hashtags ++
//   }	else if (str[i].match(regexMention)){
//   social.mentions ++
//   };
//   };
//   return social;
// }

const social = {
  hashtags: 0,
  mentions: 0
 }

const regexHash = /#/g;
const regexMention = /@/g;

const splitStr = str.split('');
// console.log(splitStr)

    splitStr.filter((soc) => {
    if (soc.match(regexHash)) {
    social.hashtags ++
    }	else if (soc.match(regexMention)){
    social.mentions ++
    }
});
return social;
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  flipBooleans,
  translateKey,
  findFirstDentist,
  tallyPeopleInManchester,
  getPugOwners,
  pluraliseKeys,
  getWordLengths,
  getPalindromes,
  replaceLettersWithXs,
  validMobileNumber,
  sumDigitsFromString,
  getWilliams,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayFruit,
  pairDNA,
  tallyHashtagsAndMentions
};