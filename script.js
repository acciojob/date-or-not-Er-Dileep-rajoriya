var isDate = function (input) {
  // Handle case where input is a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // Handle case where input is a string
  if (typeof input === 'string') {
    const trimmedInput = input.trim();
    
    // Check if the input matches the DD-MM-YYYY format
    const ddmmyyyyRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;
    if (ddmmyyyyRegex.test(trimmedInput)) {
      const [day, month, year] = trimmedInput.split('-').map(Number);
      const date = new Date(year, month - 1, day); // Month is zero-indexed
      return !isNaN(date.getTime()); // Check if date is valid
    }

    // Default date parsing
    const parsedDate = Date.parse(trimmedInput);
    return !isNaN(parsedDate);
  }

  // Handle case where input is a number
  if (typeof input === 'number') {
    return !isNaN(new Date(input).getTime());
  }

  return false; // For unsupported types
};

const input = prompt("Enter Date.");
alert(isDate(input));
