const http = require("http");

const PORT = 3000;
// Mengambil value dari Environment Variable "NAMA_ENV"
// Jika tidak ada, default ke "World"
const NAMA = process.env.NAMA_ENV || "World";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello ${NAMA}`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
