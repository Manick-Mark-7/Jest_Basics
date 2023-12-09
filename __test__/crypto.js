const crypto = require("crypto");

const hash = crypto.createHash("sha256");

hash.update("Hello , world!");

const hashedData = hash.digest("hex");

console.log("Hashed data: ", hashedData);
