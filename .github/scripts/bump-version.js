const fs = require("fs");
const path = require("path");

// Get the version from the environment variable
const version = process.env.APP_VERSION;

if (!version) {
  console.error("APP_VERSION environment variable is not set!");
  process.exit(1);
}

const packageJsonPath = path.resolve(__dirname, "package.json");

// Read the package.json file
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Update the version field
packageJson.version = version;

// Write the updated package.json back to the file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

console.log(`Updated package.json version to ${version}`);
