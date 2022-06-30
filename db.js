const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Seleka11",
  host: "localhost",
  port: 5432,
  database: "pernstack"
});

// const proConfig = {
//     connectionString: process.env.DATABASE_URL
// }

// const pool = new Pool(
//     process.env.NODE_ENV === "production" ? proConfig : devConfig
// );

module.exports = pool;