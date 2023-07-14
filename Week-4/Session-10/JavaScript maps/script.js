function calcWordFrequencies() {
    // Read the list of words from the user
    const words = prompt("Enter a list of words (separated by spaces):");
  
    // Create a map to store word frequencies
    const wordMap = new Map();
  
    // Split the input string into an array of words
    const wordArray = words.split(" ");
  
    // Loop through each word
    wordArray.forEach(word => {
      // If the word is already in the map, increment its frequency by 1
      if (wordMap.has(word)) {
        const frequency = wordMap.get(word);
        wordMap.set(word, frequency + 1);
      } else {
        // If the word is not in the map, add it with a frequency of 1
        wordMap.set(word, 1);
      }
    });
  
    // Output the word frequencies to the console
    wordMap.forEach((frequency, word) => {
      console.log(`${word} ${frequency}`);
    });
  }
  
  // Call the calcWordFrequencies function to test it
  calcWordFrequencies();
  