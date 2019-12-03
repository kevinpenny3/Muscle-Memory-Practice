// Age 
// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7

//      return ageInDogYears
// }

// const dogAge = calculateAgeInDogYears(22)
// console.log(dogAge)





// Best in Show Exercises

// const favoriteDogBreed = () => {
//     var myPrompt = prompt("What's your favorite dog breed?")
//     if (myPrompt == "meow") {
//         console.log("I like cats");
//     } else {
//     const sentence = `My favorite dog breed is a ${myPrompt}`;

//     console.log(sentence)
//     }

// }

// favoriteDogBreed()





// Addition Practice

// const add = (x, y, z) => {
//     var sum = x + y + z;
//     console.log(sum);   
// }

// add(17, 4 , 11)





// Practice Self-Driving Cars 

// const go = (direction, speed) => {
//     var message = `The car is moving ${direction} at ${speed} mph.`;
//     if (speed > 75) {
//         console.log(`${message} SLOW DOWN`);
//     } else {
//         console.log(message);
//     }
// }
// go("forwards", 45)
// go("backwards", 8)
// go("in circles", 12)
// go("backwards", 99)



// Evens and Odds Practice 

// const evenOrOdd = (num) => {
//     if (num % 2 == 0) {
//         return "Even"
//     } else {
//         return "Odd"
// }
// }
// console.log(evenOrOdd(8))




// Practicing Double functions 
// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

//     const filterOutKWords = (arrayOfWords) => {
//         let newArray = []
//         for (const word of arrayOfWords) {
//         if (!word.startsWith("k") ) {
//                 newArray.push(word)
//             }
//         } 
//         return newArray
//     }

//     let testingFunction = filterOutKWords(words);
//     console.log(testingFunction);



    const filterOutKWordsWithForEach = (arrayOfWords) => {
        let wordsWithoutK = []
        arrayOfWords.forEach(word => {
            if (!word.startsWith("k") ) {
                newArray.push(word)
        });
        return wordsWithoutK
    }
 
            

// const singleStringbuilder = (arrayOfStrings) => {
//     let joined = arrayOfStrings.join(" ")
//     return joined
// }

// // let testing = singleStringbuilder(words)
// // console.log(testing)

// let filteringFunctionForWordsArray = filterOutKWords(words);
// singleStringbuilder(filteringFunctionForWordsArray);
// console.log(singleStringbuilder(filteringFunctionForWordsArray))




// const tellMeAboutYourDog = (name, genderPronoun, weight) => {
    //     console.log(`my dog's name is ${name}, and ${genderPronoun} weighs ${weight} lbs.`)
    // }
    
    // tellMeAboutYourDog("ruffio", "he", 90)
    
    
    // You can Tune a Piano practice
    
    // const svensChances = () =>{
    
    // }


