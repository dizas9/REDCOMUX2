module.exports = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.MONGO_URI,
  },
  app: {
    name: "redcomux",
    apiURL: `${process.env.BASE_API_URL}`,
    clientURL: `${process.env.CLIENT_URL}`,
  },
};
