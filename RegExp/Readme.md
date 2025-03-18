# Complete Guide to Regular Expressions (RegExp)

Regular Expressions (RegExp) are used for pattern matching and string manipulation. They are commonly used for validation, searching, and replacing text in programming.

---

## 1. Basics of Regular Expressions
A RegExp is written between two slashes `/.../` in JavaScript, or in quotes `"..."` for other languages.

### Examples

| Pattern  | Description | Matches |
|----------|------------|---------|
| `/^abc$/` | Matches exactly "abc" | "abc" (✅), "abcdef" (❌) |
| `/^dog|cat$/` | Matches "dog" or "cat" as a whole string | "dog" (✅), "cat" (✅), "doghouse" (❌) |
| `/^hello$/i` | Case-insensitive match of whole string | "hello" (✅), "Hello" (✅), "HELLO" (✅), "hello world" (❌) |

---

## 2. Regular Expression Syntax & Characters

### A. Literal Characters
These are normal characters that match themselves.

- `/^abc$/` → Matches only "abc" exactly.

### B. Metacharacters (Special Characters)

| Symbol | Meaning | Example |
|--------|---------|---------|
| `.` | Matches any character except newline | `/^c.t$/` → Matches "cat", "cut", "cot" |
| `^` | Matches the start of a string | `/^hello/` → Matches "hello world" (✅) but not "world hello" (❌) |
| `$` | Matches the end of a string | `/world$/` → Matches "hello world" (✅) but not "world hello" (❌) |
| `*` | Matches 0 or more occurrences of the preceding character | `/^ab*c$/` → Matches "ac", "abc", "abbc", "abbbc" |
| `+` | Matches 1 or more occurrences | `/^ab+c$/` → Matches "abc", "abbc", "abbbc" (✅), but not "ac" (❌) |
| `?` | Matches 0 or 1 occurrence (optional character) | `/^colou?r$/` → Matches "color" and "colour" |
| `{n}` | Matches exactly n occurrences | `/^a{3}$/` → Matches "aaa" (✅), "aa" (❌) |
| `{n,}` | Matches at least n occurrences | `/^a{2,}$/` → Matches "aa", "aaa", "aaaa" |
| `{n,m}` | Matches between n and m occurrences | `/^a{2,4}$/` → Matches "aa", "aaa", "aaaa" |

---

## 3. Character Classes & Bracket Expressions

### A. Character Classes

| Pattern | Meaning | Example |
|---------|---------|---------|
| `/^[abc]$/` | Matches exactly "a", "b", or "c" | "a" (✅), "b" (✅), "c" (✅), "ab" (❌) |
| `/^[^abc]$/` | Matches any character not in brackets | "x" (✅), "y" (✅), "a" (❌) |
| `/^[a-z]$/` | Matches any single lowercase letter | "f" (✅), "G" (❌) |
| `/^[A-Z]$/` | Matches any single uppercase letter | "M" (✅), "m" (❌) |
| `/^[0-9]$/` | Matches any single digit | "5" (✅), "55" (❌) |
| `/^[a-zA-Z0-9]$/` | Matches any letter or digit | "A" (✅), "9" (✅), "_" (❌) |

### B. Predefined Character Classes (Shortcuts)

| Pattern | Meaning | Example |
|---------|---------|---------|
| `/^\d+$/` | Matches entire string as digits | "123" (✅), "abc123" (❌) |
| `/^\D+$/` | Matches entire string as non-digits | "abc" (✅), "123abc" (❌) |
| `/^\w+$/` | Matches entire string as word characters | "hello123" (✅), "hello-123" (❌) |
| `/^\W+$/` | Matches entire string as non-word characters | "@!#" (✅), "hello!" (❌) |
| `/^\s+$/` | Matches entire string as whitespace | "  " (✅), "hello world" (❌) |
| `/^\S+$/` | Matches entire string as non-whitespace | "Hello" (✅), "Hello world" (❌) |
| `/^\bword\b$/` | Matches "word" as a whole word | "word" (✅), "words" (❌) |

---

## 4. Groups and Capturing

| Pattern | Meaning | Example |
|---------|---------|---------|
| `/^(abc)$/` | Capturing group | "abc" (✅), "xabcx" (❌) |
| `/^(?:abc)$/` | Non-capturing group | Matches "abc" but doesn't capture |
| `/^(\w+)\s\1$/` | Backreference (repeats captured group) | "hello hello" (✅), "hello world" (❌) |

---

## 5. Assertions

- **Lookahead & Lookbehind Assertions**
  - Positive Lookahead: `/^foo(?=bar)$/` → Matches "foo" only if followed by "bar".
  - Negative Lookahead: `/^foo(?!bar)$/` → Matches "foo" only if NOT followed by "bar".
  - Positive Lookbehind: `/(?<=\$)\d+$/` → Matches numbers preceded by `$`.
  - Negative Lookbehind: `/(?<!\$)\d+$/` → Matches numbers NOT preceded by `$`.

---

## 6. Flags in Regular Expressions

| Flag | Meaning | Example |
|------|---------|---------|
| `g` | Global match | `/hello/g` → Matches all occurrences of "hello" in a string |
| `i` | Case-insensitive match | `/hello/i` → Matches "hello", "Hello", "HELLO" |
| `m` | Multiline mode | `/^start/m` → Matches "start" at the beginning of each line |
| `s` | Allows `.` to match newline characters | `/hello.world/s` → Matches "hello\nworld" |

---

## 7. Useful Regular Expressions

| Task | Regex | Example Match |
|------|-------|--------------|
| Validate email | `/^\w+@\w+\.\w+$/` | "test@example.com" |
| Validate phone number | `/^\d{10}$/` | "9876543210" |
| Validate date (DD-MM-YYYY) | `/^\d{2}-\d{2}-\d{4}$/` | "18-03-2025" |
| Validate URL | `/^(https?:\/\/)?(www\.)?\w+\.\w+$/` | "https://google.com" |

---

# Understanding Special Characters

Regular Expressions (RegExp) use various special characters to define patterns for text matching. This document explains the differences between `|`, `\`, `/`, `()`, `{}`, `[]`, and `?` in RegExp.

---

## 1. `|` (Pipe - Alternation)
- Acts as an OR operator.
- Matches either the pattern on the left or the pattern on the right.

### Example:
```regex
/dog|cat/
```
- **Matches:** "dog" or "cat"

---

## 2. `\` (Backslash - Escape Character)
- Escapes special characters, making them behave literally.
- Used for predefined character classes like `\d` (digits) and `\s` (whitespace).

### Example:
```regex
/hello\./
```
- **Matches:** "hello." (with a period)

```regex
/\d{3}/
```
- **Matches:** Any three-digit number (e.g., "123", "456")

---

## 3. `/` (Forward Slash - Regex Delimiters)
- Used in JavaScript, Perl, and other languages to **delimit** regex patterns.
- Not a regex operator itself.

### Example in JavaScript:
```javascript
const regex = /hello/;
console.log(regex.test("hello world")); // true
```

---

## 4. `()` (Parentheses - Grouping & Capturing)
- Groups expressions.
- Captures matched text for later reference.

### Example:
```regex
/(ab)c/
```
- **Matches:** "abc", capturing "ab"

- Non-Capturing Group: `(?:...)`
  ```regex
  /(?:ab)c/
  ```
  - Matches "abc" but does not capture "ab"

---

## 5. `{}` (Curly Braces - Quantifiers)
- Specifies exact repetition of characters or patterns.

### Examples:
```regex
/a{3}/  
```
- **Matches:** "aaa"

```regex
/a{2,5}/
```
- **Matches:** "aa", "aaa", "aaaa", or "aaaaa"

---

## 6. `[]` (Square Brackets - Character Sets)
- Matches **any** one of the characters inside.
- `[^...]` negates the set (matches any character **not** inside).

### Examples:
```regex
/[aeiou]/
```
- **Matches:** Any vowel

```regex
/[^0-9]/
```
- **Matches:** Any non-digit character

---

## 7. `?` (Question Mark - Optional & Lazy Quantifier)
- Makes the preceding character or group **optional** (0 or 1 occurrence).
- Also used for lazy matching.

### Examples:
```regex
/colou?r/
```
- **Matches:** "color" or "colour"

```regex
/ab+?/
```
- **Matches:** "ab" but **stops at the first match** (lazy quantifier)

---


## Conclusion
Regular Expressions are a powerful tool for text processing. Mastering them will make you more efficient in handling string manipulation tasks. Try experimenting with different patterns to solidify your understanding!

