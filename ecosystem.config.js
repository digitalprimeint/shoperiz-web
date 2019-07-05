module.exports = {
  apps: [{
    name: "",
    script: "./server.js",
    watch: false,
    env: {
      "PLUGDO_GLOBAL_ENV": "prod",
      "PORT": 3000
    }
  }]
}