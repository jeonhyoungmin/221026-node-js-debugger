const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const test = fs.readFileSync("./index.html", (err) => {
    if (err) throw err;
  })
  const css = fs.readFileSync('./style.css', (err) => {
    if (err) throw err;
  })
  const javascript = fs.readFileSync('./click.js', (err) => {
    if (err) throw err;
  })

  if(req.method === "GET") {
    if(req.url === '/'){
      // console.log('메롱')
      
      res.writeHead(200, {'Content-Type' : 'text/html'})
      res.write(test)
      res.end();
      // end를 해주지 않으면 회선 상태 곧 온라인 상태가 유지 됨.

    } else if (req.url === "/style.css"){
      // console.log("무슨 모양?");

      res.writeHead(200, {'Content-Type' : 'text/css'})
      res.write(css)
      res.end();

    } else if (req.url === '/click.js') {
      // console.log('됨')

      res.writeHead(200, {'Content-Type' : 'text/javascript'})
      res.write(javascript)
      res.end();
      
    }
    // console.log(req.url);
  }
})
server.listen(5678, (err) => {
  console.log('server listening on');
  if (err) throw err;
})


// 요청 -> request: method, url, -> 원하는대로 파일을 처리해줄 수 있다.
// 사람 x 기계 o : 서버
// GET, POST : 규칙 
// url : 규칙
// 개발자 : "String"
// 개발자는 문자열에 맞추어서 동작시키게만 하면 된다.
// 인풋 : 문자열 -> 처리★ -> 아웃풋 -> 문자열