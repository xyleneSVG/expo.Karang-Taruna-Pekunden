export function getEncryptedToken(message: string, secret: string, iv: string) {
  return `
    function hexToBytes(hex) {
      const out = new Uint8Array(hex.length / 2);
      for (let i = 0; i < hex.length; i += 2) {
        out[i/2] = parseInt(hex.substr(i, 2), 16);
      }
      return out;
    }

    function aesEncrypt(text, hexKey, ivStr) {
      const enc = new TextEncoder();
      const keyBytes = hexToBytes(hexKey);   
      const ivBytes = enc.encode(ivStr);   
      const data = enc.encode(text);

      const pad = 16 - (data.length % 16);
      const padded = new Uint8Array(data.length + pad);
      padded.set(data);
      padded.fill(pad, data.length);

      function xor(a, b) {
        const out = new Uint8Array(a.length);
        for (let i = 0; i < a.length; i++) out[i] = a[i] ^ b[i];
        return out;
      }

      let prev = ivBytes;
      const out = [];

      for (let i = 0; i < padded.length; i += 16) {
        const block = padded.slice(i, i+16);
        const x = xor(block, prev);
        const encBlock = xor(x, keyBytes.slice(0,16)); 
        out.push(...encBlock);
        prev = encBlock;
      }

      return btoa(String.fromCharCode(...out));
    }

    const encrypted = aesEncrypt("${message}", "${secret}", "${iv}");
    document.cookie = "expoToken=" + encrypted + "; path=/;";
    true;
  `;
}
