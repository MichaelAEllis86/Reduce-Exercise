//1. Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

//plan for each element in the array which is an object, push the object's value into a new array

//using reduce

function extractValue (ObjArray,key){
   return ObjArray.reduce(function(accum,nextObj){ //question! why return here
        accum.push(nextObj[key]);
        return accum 
    },[])
}

//old fashioned way
// function extractValue(ObjArray,key){
//     let resultArray=[];
//     for (let i=0; i<ObjArray.length; i++){
//         resultArray.push(ObjArray[i][key])
//     }
//     return resultArray
// } 

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
// extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']

// const minScore = midtermScores.reduce(function(min, nextScore) {
// 	if (nextScore < min) {
// 		return nextScore;
// 	}
// 	return min;
// });

// 2. vowelCount

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

function vowelCount(string){
    let lowerCasedArray=string.toLowerCase().split('')           //making the string lowercase by default and then using split to turn into an array that we can call reduce on
    let vowels='aeiou'                                          //storing vowels so we can use index of on this string to compare with letters in the new array
    return lowerCasedArray.reduce(function(accum,nextLetter){  //setting up reduce
        if (vowels.indexOf(nextLetter)!==-1) {                // if a vowel is present in the next element of the array....using indexof not -1 cause -1 would mean it's not there
            if(accum[nextLetter]){                           //setting up key value pairs here if the accum (the key[value]) exists already add 1 to it
                accum[nextLetter]++                         
            }
            else {
                accum[nextLetter]=1                        // if it doesn't exist yet make it 1
            }

        }
return accum                                            //return the accumulator at the end!
    },{})
}

//3. addKeyAndValue

// Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

// const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

// addKeyAndValue(arr, 'title', 'Instructor') //

// [
//   {title: 'Instructor', name: 'Elie'},
//   {title: 'Instructor', name: 'Tim'},
//   {title: 'Instructor', name: 'Matt'},
//   {title: 'Instructor', name: 'Colt'}
// ]

//plan - need to add the key and value argument to each object in the array

    function addKeyAndValue(arr, key, value){
        return arr.reduce(function(acc,next,idx){
            acc[idx][key] = value;
            return acc;
        },arr); //existing array is accum starting point
    }
    

  //4. partition

// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

// function isEven(val){
//   return val % 2 === 0;
// }

// const arr = [1,2,3,4,5,6,7,8];

// partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];

// function isLongerThanThreeCharacters(val){
//   return val.length > 3;
// }

// const names = ['Elie', 'Colt', 'Tim', 'Matt'];

// partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]  

function partition (array,callback){
    return arr.reduce(function(accum,next){
        if(callback(next)===true){
            accum[0].push(next)
        }
        else {
            accum[1].push(next)
        }
        return accum
    },[[],[]])

}
