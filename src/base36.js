function encode(input) {
  // Convert input string to a hexadecimal representation
  const hexString = [...new TextEncoder().encode(input)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  // Convert the hexadecimal string to BigInt and then to Base36
  return BigInt(`0x${hexString}`).toString(36);
}

function decode(input) {
  // Convert Base36 input to BigInt and then to a hexadecimal string
  const hexString = BigInt(`0x${convert(input, 36).toString(16)}`).toString(16);

  // Convert the hexadecimal string back to bytes and then to a UTF-8 string
  const bytes = new Uint8Array(
    hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)),
  );
  return new TextDecoder().decode(bytes);
}

function convert(value, radix) {
  return [...value.toString()].reduce(
    (r, v) => r * BigInt(radix) + BigInt(parseInt(v, radix)),
    0n,
  );
}

export { decode, encode };
