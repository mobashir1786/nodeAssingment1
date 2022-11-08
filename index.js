const obj = JSON.stringify(require("./object"));

const http = require("http");
const server = http.createServer((req, res) => {
    res.write(`
    <h1>what is Node.js</h1>
    <h3>Node.js is an open source javascript runtime enviroment built on chrome's V8 JS engine that execute code outside a web browser</h3>
    <h3>Rayan Dadl wrote some code using c,c++,js and execute it using v8 engine, this code is commonly known as node.js</h3>
    `);
    res.write(obj);
    res.end();
})
server.listen(1786,()=>{
    console.log(obj);
});