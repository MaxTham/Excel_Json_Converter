const xlsx = require("xlsx");
const fs = require("fs");

// Load the Excel file
const workbook = xlsx.readFile("./coin_list.xlsx");

// Access the first sheet (or specify the sheet name if needed)
const sheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert the sheet data to JSON
const data = xlsx.utils.sheet_to_json(sheet);

// Extract the symbols column (replace 'symbol' with your column header name)
const symbolsArray = data.map(row => row["Symbol"]); // Make sure "symbol" matches the column header in Excel

// Structure it into the desired JSON format
const result = {
  symbols: symbolsArray,
};

// Save the output to a JSON file
fs.writeFileSync("output.json", JSON.stringify(result, null, 2));

console.log("Data has been converted to JSON!");
