# JavaScript Identifier Rules

## What is an Identifier?

An identifier is a name used for variables, functions, classes, and other program elements.

## Idenitifier Rules: Follow this
• Must begin with a letter (a–z, A–Z), underscore (_), or dollar sign ($).
• Subsequent characters may also include digits (0–9).
• Cannot start with a digit.
• Cannot be a reserved keyword.
• Are case-sensitive.
• May contain Unicode letters and Unicode escape sequences.
• Cannot contain spaces, hyphens, or special characters (except _ and $).

## Rules for Identifiers

1. An identifier can contain letters, digits, underscores, and dollar signs.
2. An identifier cannot start with a digit.
3. An identifier cannot contain spaces.
4. An identifier cannot be a JavaScript reserved keyword.
5. Identifiers are case-sensitive.
   - `Name` and `name` are different.
6. It is recommended to use meaningful names.
7. Avoid using names that are already used for built-in functions or objects.
8. You can use camelCase for variables and functions.
   - Example: `firstName`, `calculateTotal`
9. You can use PascalCase for class names.
   - Example: `StudentDetails`
10. You should avoid using single-letter names unless they are common in loops.
11. It may contain a unicode character 
12. It may contain a chineeze character as well


## Valid Examples

```javascript
let name = "Alice";
let firstName = "Bob";
let _count = 5;
let $price = 100;
```

## Invalid Examples

```javascript
let 2name = "Alice";      // starts with a digit
let my name = "Alice";    // contains a space
let class = 10;           // reserved keyword
```

## Summary

A good identifier should be:
- meaningful
- readable
- valid according to JavaScript syntax
- not reserved by the language
