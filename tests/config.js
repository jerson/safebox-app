jest.mock('../src/Config.tsx', () => {
  return {
    server: {
      url: 'https://safebox.jerson.dev'
    },
    settings: {
      keyOptions: {
        RSABits: 2048,
        cipher: 'aes256',
        compression: 'zlib',
        compressionLevel: 9,
        hash: 'sha512'
      }
    }
  };
});
