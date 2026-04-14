## Spread Array[...]
Spread operator copies all existing elements -> lead to extra time and memory overhead.
So, it's more efficeint to mutate the exsiting array using `.push` in this question.

## Frequency Vector
A frequency vector represents the count of each character, allowing us to compare strings based on composition rather than order.
In this case, we use array because of fixed 26 chracters.(As fixed number is passed, `array` is best to access)
(We can use `Map` as well for more complex condition)


## charCodeAt
The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
```

const index = char.charCodeAt(0) - 'a'.charCodeAt(0);


const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);
// Expected output: "Character code 113 is equal to q"

```

### What if `non-alphabetic characters`?
Instead of fixed-siz array(26), we need to switch dynamic frequency map
```
{
  'e': 1,
  'a': 1,
  't': 1,
  '!': 1
}
```
Q:"How do we convert this frequency map into a stable key?"
A:"We need a deterministic ordering of characters"
```
{a:1, b:2}
{b:2, a:1}

# Produce the SAME key
```




