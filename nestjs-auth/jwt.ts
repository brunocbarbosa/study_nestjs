const base64Url = require('base64url');

const header = {
  alg: 'HS256',
  typ: 'JWT',
};

const payload = {
  username: 'user1@user.com',
  name: 'Bruno Barbosa',
  exp: new Date().getTime(),
};

const key = 'abcd123456';

const headerEncoded = base64Url
  .encode(JSON.stringify(header))
  .toString('base64');
const payloadEncoded = base64Url
  .encode(JSON.stringify(payload))
  .toString('base64');

console.log(headerEncoded, payloadEncoded);

const crypt = require('crypto');

const signature = crypt
  .createHmac('sha256', key)
  .update(`${headerEncoded}-${payloadEncoded}`)
  .digest('bin');

console.log(
  `${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`,
);
