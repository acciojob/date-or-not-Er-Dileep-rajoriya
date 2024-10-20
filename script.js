var isDate = function (input) {
  // Check if input is a valid Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime()); // Check if the date is valid
  }
  
  // If input is a string, try to parse it into a date
  if (typeof input === 'string') {
    // Trim any whitespace and parse the date
    const trimmedInput = input.trim();
    const parsedDate = Date.parse(trimmedInput);
    return !isNaN(parsedDate); // Check if parsed date is valid
  }
  
  // If input is a number, check if it's a valid timestamp
  if (typeof input === 'number') {
    return !isNaN(new Date(input).getTime()); // Validate timestamp
  }
  
  // For any other types (e.g., objects, arrays), return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
