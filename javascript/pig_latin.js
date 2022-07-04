// Encoding and Decoding Pig Latin
// RULES:
// words that begin with consonant => move first letter to end and then add -ay as suffix
// eg: [d]og
// words that begin with vowel [aeiou] => no need to move first letter just add -yay as suffix
// eg: [a]nd

// factory function with encode and decode methods for pig latin
const PigLatin = () => {
    return {
        encode: sentence => sentence.toLowerCase().split(" ").map(word => {
            if(/^[a-z]+$/.test(word) === false) return word
            if(/^[aeiou]/.test(word)){
                return `${word}yay`
            } else {
                return `${word.slice(1)}${word[0]}ay`
            }
        }).join(" "),
        decode: sentence => sentence.toLowerCase().split(" ").map(word => {
            if(/^[a-z]+$/.test(word) === false) return word
            if(/^[aeiou]/.test(word) && /yay$/i.test(word)){
                word = word.replace(/yay$/, '')
                return word
            } else {
                word = word.replace(/ay$/, '')
                return `${word[word.length-1]}${word.slice(0,word.length-1)}`
            }
        }).join(" ")
    }
}

// input the test sentence
const sentence = "this is an example of 6lack a sentence and i will be the wirzad king"
// make instance of my factory function
const pigLatin = PigLatin()
// use the instance to encode the sentence
let encoded = pigLatin.encode(sentence)
// use the instance to decode the encoded sentence
let decoded = pigLatin.decode(encoded)


// print out the normal sentence
console.log(sentence)
// print out the encoded sentence
console.log(encoded)
// print out the decoded encoded sentence
console.log(decoded)