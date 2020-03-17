module.exports = rawRequest => {
  const pattern = /(?<method>\w+) (?<path>\/\w*)/;
  //aqui el method puede es (get, post, put, etc)
  const { method, path } = rawRequest.match(pattern).groups;
  //esta diciendo que matchee el pattern. los grupos son lo que esta dentro del parentesis 
  console.log(rawRequest)
  const body = rawRequest.split('\r\n\r\n')[1];
  return {
    method, 
    path, 
    body
  };
};  
