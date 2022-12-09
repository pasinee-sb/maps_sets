// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4])

answer: {1, 2, 3, 4}


// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")

answer: 'ref'

// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
 answer: 

 0: {Array(3) => true}
  key:  [1, 2, 3]
  value: true
1: {Array(3) => false}
 key:  [1, 2, 3]
 value: false

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr=> {return new Set(arr).size !== arr.length}

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(char){
    return "aeiou".includes(char);
}
function vowelCount(string){
    const vowelMap = new Map();
    for (let char of string){
        if(isVowel(char)){
            if(vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char)+1);
            }else{
                vowelMap.set(char,1);
            }
        }
    }
    return vowelMap;
}

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }