// Importing the filesystem library
const fs = require("fs");

/**
 * The main Method that prints the count of sentences, words and punctuations
 * takes the file name as input
 */

const getCount = (file_name) => {
  fs.readFile(file_name, "utf-8", (err, data) => {
    // Any error in reading the file, will throw an error
    if (err) throw err;
    // Getting sentences Count in the data
    let sentencesCount = getSentencesCount(data);

    // Getting punctuation count in the data
    let punctuationCount = getPunctuationCount(data);

    // Getting unique words count in the data
    let wordsCount = getWordsCount(data);

    //  Priniting the result
    console.log(
      `Sentences Count : ${sentencesCount} \nPunctuation Count : ${punctuationCount} \nWords Count : ${wordsCount}`
    );
  });
};

/** Method to get the count of Sentences */

function getSentencesCount(data) {
  /** 
    Returning the length by subtracting the empty space elemnt
    that gets created in the array when we split the data based on period(.)
    */

  return data.split(".").length - 1;
}

/** Method to get the count of Unique Words */

function getWordsCount(data) {
  var words = {};
  // Splitting the data by space, newline and tab
  for (let word of data.split(/\s+/)) {
    //  Removing any punctuation characters from the word
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_'`~()]/g, "");
    //  checking for uniqueness of word
    if (word && !words[word.toLowerCase()]) {
      words[word.toLowerCase()] = 1;
    }
  }
  //  Returning the count based on keys in words object
  return Object.keys(words).length;
}

/** Method to get the count of punctuations and symbols */

function getPunctuationCount(data) {
  let count = 0;
  //  Punctuation characters
  const punctuation = ".?!,;:-{}[]()'\"’";

  //  looping over entire data to check for the punctutaion symbol and increase the count
  for (let i = 0; i < data.length; i++) {
    if (punctuation.includes(data[i])) {
      count++;
    }
  }
  return count;
}

/** Method to get the file name from args and Validating for correct format of the file */

const getFilenameFromArgs = () => {
  if (process.argv.length < 3) {
    throw Error("Please provide file name");
  }
  let file_name = process.argv[2];
  if (file_name.split(".")[1] !== "txt") {
    throw Error("Not a valid format");
  }
  return file_name;
};

//  Calling the main method to get the count of sentences, unique words and punctuation or symbols
getCount(getFilenameFromArgs());
