const http = require('http')
const { exec } = require('child_process')

http.createServer((req, res) => {
  res.write("Minecraft server is running.")
  res.end()
}).listen(3000)

exec("bash run.sh", (err, stdout, stderr) => {
  console.log(stdout)
})
