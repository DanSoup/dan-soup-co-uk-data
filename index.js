const http = require('http');

//create a server object:
http.createServer(function (req, res) {

  // console.log(req.params)
  console.log(Object.keys(req))
  console.log(req.url)

  const [parametersString, queriesString = ''] = req.url.split('?');

  const parameters = parametersString.split('/').slice(1);
  
  const queries = queriesString.split('&').reduce((acc, query) => {
    const [key, value] = query.split('=');
    acc[key] = value;
    return acc;
  }, {})

  console.log(parameters)
  console.log(queries)

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(require('./data/projects/projects.json')));
  res.end();

}).listen(8080);