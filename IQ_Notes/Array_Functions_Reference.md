# JavaScript Array Functions Reference

This file lists common JavaScript array methods with their basic purpose and syntax.

## 1. push()
- Adds one or more elements to the end of an array.
- Returns the new length of the array.
- Syntax: array.push(element1, element2, ...)

## 2. pop()
- Removes the last element from an array.
- Returns the removed element.
- Syntax: array.pop()

## 3. shift()
- Removes the first element from an array.
- Returns the removed element.
- Syntax: array.shift()

## 4. unshift()
- Adds one or more elements to the beginning of an array.
- Returns the new length of the array.
- Syntax: array.unshift(element1, element2, ...)

## 5. concat()
- Combines two or more arrays and returns a new array.
- Does not change the original array.
- Syntax: array.concat(array2, array3, ...)

## 6. join()
- Joins all array elements into a string.
- Syntax: array.join(separator)

## 7. slice()
- Returns a shallow copy of a portion of an array.
- Does not change the original array.
- Syntax: array.slice(start, end)

## 8. splice()
- Adds or removes elements from an array.
- Changes the original array.
- Syntax: array.splice(start, deleteCount, item1, item2, ...)

## 9. indexOf()
- Returns the first index of a specified element.
- Returns -1 if not found.
- Syntax: array.indexOf(searchElement)

## 10. lastIndexOf()
- Returns the last index of a specified element.
- Returns -1 if not found.
- Syntax: array.lastIndexOf(searchElement)

## 11. includes()
- Checks whether an array contains a specified element.
- Returns true or false.
- Syntax: array.includes(searchElement)

## 12. forEach()
- Executes a function once for each array element.
- Does not return a new array.
- Syntax: array.forEach(callback)

## 13. map()
- Creates a new array by applying a function to each element.
- Syntax: array.map(callback)

## 14. filter()
- Creates a new array with elements that pass a test.
- Syntax: array.filter(callback)

## 15. reduce()
- Reduces an array to a single value by repeatedly applying a reducer function.
- Syntax: array.reduce(callback, initialValue)

## 16. reduceRight()
- Works like reduce(), but starts from the end of the array.
- Syntax: array.reduceRight(callback, initialValue)

## 17. every()
- Checks whether all elements pass a test.
- Returns true or false.
- Syntax: array.every(callback)

## 18. some()
- Checks whether at least one element passes a test.
- Returns true or false.
- Syntax: array.some(callback)

## 19. find()
- Returns the first element that passes a test.
- Syntax: array.find(callback)

## 20. findIndex()
- Returns the index of the first element that passes a test.
- Syntax: array.findIndex(callback)

## 21. sort()
- Sorts the elements of an array in place.
- Syntax: array.sort(compareFunction)

## 22. reverse()
- Reverses the order of elements in an array.
- Changes the original array.
- Syntax: array.reverse()

## 23. flat()
- Flattens nested arrays into a single array.
- Syntax: array.flat(depth)

## 24. flatMap()
- Maps each element and then flattens the result into a new array.
- Syntax: array.flatMap(callback)

## 25. from()
- Creates a new array from an array-like or iterable object.
- Syntax: Array.from(object)

## 26. of()
- Creates a new array with the provided elements.
- Syntax: Array.of(element1, element2, ...)

## 27. isArray()
- Checks whether a value is an array.
- Returns true or false.
- Syntax: Array.isArray(value)

## 28. fill()
- Fills all elements of an array with a static value.
- Syntax: array.fill(value, start, end)

## 29. copyWithin()
- Copies a sequence of array elements to another position in the same array.
- Syntax: array.copyWithin(target, start, end)

## 30. entries()
- Returns an iterator object with key/value pairs.
- Syntax: array.entries()

## 31. keys()
- Returns an iterator object with array keys.
- Syntax: array.keys()

## 32. values()
- Returns an iterator object with array values.
- Syntax: array.values()

## 33. at()
- Returns the element at a specified index.
- Supports negative indexing.
- Syntax: array.at(index)

## 34. toString()
- Converts an array to a comma-separated string.
- Syntax: array.toString()

## 35. toLocaleString()
- Converts an array to a localized string.
- Syntax: array.toLocaleString()

## 36. Array.prototype.length
- Gives the number of elements in an array.
- Not a method, but a very important array property.
