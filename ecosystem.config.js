module.exports = {
  apps: [{
    name: "markdown-editor",
    script: "http-server",
    args: "./dist -p 8866",
    interpreter: "node",
    env: {
      NODE_ENV: "development",
    }
  }]
}
