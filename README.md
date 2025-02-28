✨ Features
Read Excel files (.xlsx, .xls).

Extract specific columns.

Generate clean JSON output.

Lightweight and fast.

🛠️ Prerequisites
Node.js (v14+)

npm (bundled with Node.js)

🔧 Installation
Clone/download the repository.

Install dependencies:

bash
Copy
npm install xlsx
🚀 Usage
Prepare your Excel file:

Ensure the columns are in a labeled column.

Run the script:

bash
Copy
node excel-to-json.js
Get the output:

A file named output.json will be generated in the same directory.


📦 Dependencies
xlsx: Parse and write Excel files.

fs (Node.js built-in module): File system operations.


❗ Disclaimer
Ensure your Excel file is formatted correctly.

The script will overwrite output.json on each run.
