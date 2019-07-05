const setting = {
  dev: {
    db: {
      user: "root",
      password: "1997",
      host: "localhost",
      database: "shoperiz"
    }
  },
  prod: {
    db: {
      user: "",
      password: "",
      host: "",
      database: ""
    },
    security: {
      rateLimit: {
        active: true,
        period: 1,
        limit: 1500
      },
      header: {
        active: true
      },
      origin: {
        active: true,
        domains: ['', '']
      }
    }
  }
}

exports.settings = function () {
  return setting;
};