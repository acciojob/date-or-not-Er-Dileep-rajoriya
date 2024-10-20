var isDate = function (input) {
  // Handle case where input is a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime()); // Valid date check
  }
  
  // Handle case where input is a string
  if (typeof input === 'string') {
    const trimmedInput = input.trim(); // Trim whitespace
    // Check if the trimmed input can be parsed into a valid date
    const parsedDate = Date.parse(trimmedInput);
    return !isNaN(parsedDate); // Check if parsed date is valid
  }
  
  // Handle case where input is a number
  if (typeof input === 'number') {
    return !isNaN(new Date(input).getTime()); // Validate timestamp
  }
  
  // For any other types (e.g., objects, arrays), return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
