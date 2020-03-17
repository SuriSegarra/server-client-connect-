const parseRequest = require('./utils/parsedRequest.js');

describe('parseRequesr', () => {
  it('parse a raw request', () => {
    const rawRequest = `GET / HTTP/1.1
        Host: developer.mozilla.org
        Accept-Language: fr`;
    const request = parseRequest(rawRequest);

    expect(request).toEqual({
      method:'GET',
      path: '/'
    });
  });

//   it('parse a raw request with a body', () => {
//     const rawRequest = `    POST / HTTP/1.1
//         Host: developer.mozilla.org
//         Accept-Language: fr\r\r
//         {"color":"red"}`;

//     const request = parseRequest(rawRequest);

//     expect(request).toEqual({
//       method: 'Post',
//       path: '/',
//       body: '{"color": "red"'
//     });
//   });
});
