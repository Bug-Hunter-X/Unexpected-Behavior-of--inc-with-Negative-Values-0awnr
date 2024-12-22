# MongoDB $inc Operator with Negative Values
This repository demonstrates an uncommon error related to the use of the `$inc` operator in MongoDB when dealing with negative increments and the absence of an initial field.  Using `$inc` with a negative value on a non-existent field will create the field with the negative value instead of throwing an error or creating the field with a 0 value as expected by some developers. This can lead to subtle and difficult-to-debug issues.  This example highlights this behavior and shows how to mitigate it. 

## Bug Description
The code attempts to decrement a counter using `$inc` with -1, but if the counter doesn't initially exist, it results in the counter being initialized to -1 rather than 0.  This is inconsistent with the expected behavior.  The issue is demonstrated in `bug.js`.

## Solution
The `bugSolution.js` file provides a corrected approach using the `$setOnInsert` operator in conjunction with `$inc` to guarantee correct initialization.  This solution ensures the counter starts at 0 if it doesn't exist, and then correctly increments or decrements.

## How to reproduce
1. Clone this repository.
2. Ensure MongoDB is running locally.
3. Execute `bug.js`. 
4. Observe that the `sequence` field is set to -1.
5. Execute `bugSolution.js`. 
6. Observe that the `sequence` field is set to 0 after the first increment.