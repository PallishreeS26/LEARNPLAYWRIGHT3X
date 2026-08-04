
 let data = "Hello World";
 const str = data.split('\n')[0];

  let result = "";
  for (const char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }


console.log(`${result}`); // Output: "Helo Wrd"