# JavaScript Loose Comparison Bug

This repository demonstrates a common error in JavaScript related to loose comparison (==) when dealing with `null` or `undefined` values.  Loose comparison can lead to unexpected behavior if not handled carefully.

## Bug Description

The `foo` function adds two numbers. However, it uses loose comparison (`==`) to check for `null` or `undefined` inputs.  This can result in incorrect results due to JavaScript's type coercion during loose comparison.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js`. Observe that the output will not always be correct when null or undefined is passed in.
3. Run `bugSolution.js` to see the corrected version.

## Solution

The solution uses strict equality (`===`) to accurately check for `null` and `undefined`. Strict equality avoids type coercion, preventing unexpected results.