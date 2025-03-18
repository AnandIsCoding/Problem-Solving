# Complete Guide to Regular Expressions (RegExp)

Regular Expressions (RegExp) are used for pattern matching and string manipulation. They are commonly used for validation, searching, and replacing text in programming.

---

## 1. Basics of Regular Expressions
A RegExp is written between two slashes `/.../` in JavaScript, or in quotes `"..."` for other languages.

### Examples

| Pattern  | Description | Matches |
|----------|------------|---------|
| `/abc/` | Matches "abc" in a string | "abcdef", "123abc456" |
| `/dog|cat/` | Matches "dog" or "cat" | "dog", "cat" |
| `/hello/i` | Case-insensitive match | "hello", "Hello", "HELLO" |

---

## 2. Regular Expression Syntax & Characters

### A. Literal Characters
These are normal characters that match themselves.

- `/abc/` → matches "abc" exactly.

### B. Metacharacters (Special Characters)

| Symbol | Meaning | Example |
|--------|---------|---------|
| `.` | Matches any character except newline | `/c.t/` → "cat", "cut", "cot" |
| `^` | Matches the start of a string | `/^hello/` → "hello world" (✅) but not "world hello" (❌) |
| `$` | Matches the end of a string | `/world$/` → "hello world" (✅) but not "world hello" (❌) |
| `*` | Matches 0 or more occurrences of the preceding character | `/ab*c/` → "ac", "abc", "abbc", "abbbc" |
| `+` | Matches 1 or more occurrences | `/ab+c/` → "abc", "abbc", "abbbc" (✅), but not "ac" (❌) |
| `?` | Matches 0 or 1 occurrence (optional character) | `/colou?r/` → Matches "color" and "colour" |
| `{n}` | Matches exactly n occurrences | `/a{3}/` → "aaa" (✅), "aa" (❌) |
| `{n,}` | Matches at least n occurrences | `/a{2,}/` → "aa", "aaa", "aaaa" |
| `{n,m}` | Matches between n and m occurrences | `/a{2,4}/` → "aa", "aaa", "aaaa" |

---

## 3. Character Classes & Bracket Expressions

### A. Character Classes

| Pattern | Meaning | Example |
|---------|---------|---------|
| `[abc]` | Matches any character in brackets | `/[abc]/` → Matches "a", "b", or "c" |
| `[^abc]` | Matches any character not in brackets | `/[^abc]/` → Matches any character except "a", "b", or "c" |
| `[a-z]` | Matches any lowercase letter | `/[a-z]/` → Matches "a" to "z" |
| `[A-Z]` | Matches any uppercase letter | `/[A-Z]/` → Matches "A" to "Z" |
| `[0-9]` | Matches any digit | `/[0-9]/` → Matches "0" to "9" |
| `[a-zA-Z0-9]` | Matches any letter or digit | `/[a-zA-Z0-9]/` |

### B. Predefined Character Classes (Shortcuts)

| Pattern | Meaning | Example |
|---------|---------|---------|
| `\d` | Matches any digit (0-9) | `/\d+/` → Matches "123", "4567" |
| `\D` | Matches any non-digit | `/\D+/` → Matches "abc", "Hello" |
| `\w` | Matches any word character (a-z, A-Z, 0-9, _) | `/\w+/` → Matches "hello123", "abc_def" |
| `\W` | Matches any non-word character | `/\W+/` → Matches "@!#" |
| `\s` | Matches any whitespace (space, tab, newline) | `/\s+/` → Matches " " or "\t" |
| `\S` | Matches any non-whitespace character | `/\S+/` → Matches "Hello" |
| `\b` | Matches a word boundary | `/\bword\b/` → Matches "word" but not "words" |
| `\B` | Matches a non-word boundary | `/\Bword\B/` → Matches "swordfight" but not "word fight" |
| `\n` | Matches a newline character | `/line1\nline2/` → Matches "line1" followed by a newline and "line2" |
| `\t` | Matches a tab character | `/word\tword/` → Matches "word" followed by a tab and "word" |
| `\r` | Matches a carriage return | `/\r/` → Matches "\r" character |
| `\f` | Matches a form feed character | `/\f/` → Matches "\f" character |
| `\v` | Matches a vertical tab | `/\v/` → Matches "\v" character |

---

## 4. Groups and Capturing

| Pattern | Meaning | Example |
|---------|---------|---------|
| `(abc)` | Capturing group | `/(ab)c/` → Captures "ab" |
| `(?:abc)` | Non-capturing group | `/(?:ab)c/` → Matches "abc" but doesn't capture "ab" |
| `\1` | Backreference (repeats captured group) | `/(\w+)\s\1/` → Matches "hello hello" |

---

## 5. Assertions

- **Lookahead & Lookbehind Assertions**
  - Positive Lookahead: `/foo(?=bar)/` → Matches "foo" only if followed by "bar".
  - Negative Lookahead: `/foo(?!bar)/` → Matches "foo" only if NOT followed by "bar".
  - Positive Lookbehind: `/(?<=\$)\d+/` → Matches numbers preceded by `$`.
  - Negative Lookbehind: `/(?<!\$)\d+/` → Matches numbers NOT preceded by `$`.

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

## Conclusion
Regular Expressions are a powerful tool for text processing. Mastering them will make you more efficient in handling string manipulation tasks. Try experimenting with different patterns to solidify your understanding!
