function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined values using strict equality
  }

  return a + b; // Simple addition
}