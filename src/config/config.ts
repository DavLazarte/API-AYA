export default {
  jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
  DB: {
    URI: process.env.MONGODB_URI || "mongodb+srv://root:root@clusteraya.7vbix.mongodb.net/ayadatabase?retryWrites=true&w=majority",
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
};
