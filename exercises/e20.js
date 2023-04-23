// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let arrayOfANames = [];
  let arrayOfNoANames = [];
  let arrayOfAllNames = [];

  for (let name of array) {
    for (let i = 0; i < name.length; i++) {
      if (name[i].toLowerCase() === "a") {
        arrayOfANames.push(name);
        break;
      } else if (i === name.length - 1) {
        arrayOfNoANames.push(name);
      }
    }
  }
  arrayOfAllNames.push(arrayOfANames);
  arrayOfAllNames.push(arrayOfNoANames);
  return arrayOfAllNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
