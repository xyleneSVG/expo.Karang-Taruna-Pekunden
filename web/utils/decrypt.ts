export function aesDecrypt(encryptedB64: string, hexKey: string, ivStr: string) {
  const enc = Buffer.from(encryptedB64, "base64");

  const keyBytes = Buffer.from(hexKey, "hex");
  const ivBytes = Buffer.from(ivStr, "utf-8");

  function xor(a: Buffer, b: Buffer) {
    const out = Buffer.alloc(a.length);
    for (let i = 0; i < a.length; i++) out[i] = a[i] ^ b[i];
    return out;
  }

  let prev = ivBytes;
  let result = Buffer.alloc(0);

  for (let i = 0; i < enc.length; i += 16) {
    const block = enc.subarray(i, i + 16);
    const dec = xor(block, keyBytes.subarray(0, 16));
    const plain = xor(dec, prev);
    result = Buffer.concat([result, plain]);
    prev = block;
  }

  const pad = result[result.length - 1];
  return result.subarray(0, result.length - pad).toString();
}
