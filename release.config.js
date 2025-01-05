module.exports = {
  branches: [
    "main",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "semantic-release-export-data",
    "@semantic-release/github",
    // [
    //   "@semantic-release/github",
    //   {
    //     assets: ["package.json", "package-lock.json"],
    //   },
    // ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json"],
      },
    ],
  ],
};
