// Base36 encoder
function encodeBase36(input) {
  // Convert input string to a hexadecimal representation
  const hexString = [...new TextEncoder().encode(input)].map((byte) => byte.toString(16).padStart(2, "0")).join("");

  // Convert the hexadecimal string to BigInt and then to Base36
  return BigInt(`0x${hexString}`).toString(36);
}

function convert(value, radix) {
  return [...value.toString()].reduce((r, v) => r * BigInt(radix) + BigInt(parseInt(v, radix)), 0n);
}

// Base36 decoder
function decodeBase36(input) {
  // Convert Base36 input to BigInt and then to a hexadecimal string
  const hexString = BigInt(`0x${convert(input, 36).toString(16)}`).toString(16);

  // Convert the hexadecimal string back to bytes and then to a UTF-8 string
  const bytes = new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
  return new TextDecoder().decode(bytes);
}

// Example usage
const originalText = "Takes a string to encode and a destination Uint8Array to put resulting UTF-8 encoded text into, and returns an object indicating the progress of the encoding. This is potentially more performant than the older encode() method.";
const encoded = encodeBase36(originalText);
const decoded = decodeBase36(encoded);

console.log("Encoded:", encoded);
console.log("Decoded:", decoded);

export { decodeBase36, encodeBase36 };
