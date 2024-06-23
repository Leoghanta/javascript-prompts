/* Prompt will accept user input but this needs to be stored in the computer's memory.
 * Let us first create some memory to store this information.
 */

let xmyName;   //let is a keyword that tells the browser to save some space.
              //variables are names so we can access this saved memory.


// Call the prompt function, and place any input into the variable called myName
xmyName = prompt("Enter your name");

// use document.write to write to the HTML document. we use commas to separate
// the text and variables. (watch out for white spaces)
document.write("Hello, ", xmyName);


