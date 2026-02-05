// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/tests/**/*.spec.ts"],
    verbose: true,
    testTimeout: 30000, // ESLint can be slow on first run
};
